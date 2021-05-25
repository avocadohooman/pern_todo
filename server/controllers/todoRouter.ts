import express from 'express';
import pool from '../db';
import { ToDo } from '../models/todo';
import rateLimit from 'express-rate-limit';

const todoRouter = express.Router();

//set table for environment
let table = 'todo';
if (process.env.NODE_ENV === 'development') {
    table = 'todo_dev';
} else if (process.env.NODE_ENV === 'test') {
    table = 'todo_test'
}

console.log(`Using table: ${table} in environment: ${process.env.NODE_ENV}`)

//setting limit for post requests
const postApiLimiter = rateLimit({
    max: 10,// max requests
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: 'Too many accounts created from this IP, please try again after an hour' // message to send
});

//create a todo

todoRouter.post('/', postApiLimiter, async (req, res) => {
    const body: ToDo = req.body;

    try {
        console.log(req.body);
        const newTodo = await pool.query(`INSERT INTO ${table} (description) VALUES($1) RETURNING *`, 
        [body.description]);
        res.status(200).json(newTodo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

//set GET limiter
const apiLimiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 100
  });
  
//get all todos

todoRouter.get('/', apiLimiter, async (req, res) => {
    try {
        const allTodos = await pool.query(`SELECT * FROM ${table} `)
        res.status(200).json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get a todo

todoRouter.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query(`SELECT * FROM ${table} WHERE todo_id = ($1)`, [id]);
        res.status(200).json(todo.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
})

//update a todos

todoRouter.put('/:id', async (req, res) => {
    try {
        const todoUpdate = req.body;
        const {id} = req.params;
        const updateTodo = await pool.query(`UPDATE ${table}  SET description = ($1) WHERE todo_id = ($2)`, [todoUpdate.description, id]);
        console.log("UPDATED TODO", updateTodo.rows);
        res.status(200).json(updateTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//delete a todo

todoRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM ${table} WHERE todo_id = ($1)`, [id]);
        console.log("todo deleted");
        res.status(200).json({message: "Todo deleted"});
    } catch (error) {
        console.log(error.message);
    }
})

export default todoRouter;

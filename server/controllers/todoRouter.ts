import express from 'express';
import pool from '../db';
import { ToDo } from '../models/todo';

const todoRouter = express.Router();

//set table for environment
let table = 'todo';
if (process.env.NODE_ENV === 'development') {
    table = 'todo_dev';
} else if (process.env.NODE_ENV === 'test') {
    table = 'todo_test'
}

console.log(`Using table: ${table} in environment: ${process.env.NODE_ENV}`)
//create a todo

todoRouter.post('/', async (req, res) => {
    const body: ToDo = req.body;

    try {
        console.log(req.body);
        const newTodo = await pool.query(`INSERT INTO ${table} (description) VALUES($1) RETURNING *`, 
        [body.description]);
        res.status(200).json(newTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get all todos

todoRouter.get('/', async (req, res) => {
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
        res.status(200).json(todo.rows);
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
        res.status(200).json("ToDo was updated");
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
        res.status(200).json("Todo deleted");
    } catch (error) {
        console.log(error.message);
    }
})

export default todoRouter;

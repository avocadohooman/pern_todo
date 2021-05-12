import express, { response } from 'express';
import pool from '../db';
import { ToDo } from '../models/todo';

const todoRouter = express.Router();

//create a todo

todoRouter.post('/', async (req, res) => {
    const body: ToDo = req.body;
    console.log("Body", body);
    try {
        console.log(req.body);
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", 
        [body.description]);
        res.status(200).json(newTodo.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get all todos

todoRouter.get('/', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.status(200).json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get a todo

todoRouter.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = ($1)", [id]);
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

        const updateTodo = await pool.query("UPDATE todo SET description = ($1) WHERE todo_id = ($2)", [todoUpdate.description, id]);
        res.status(200).json("ToDo was updated");
    } catch (error) {
        console.log(error.message);
    }
})

//delete a todo

todoRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM todo WHERE todo_id = ($1)", [id]);
        console.log("todo deleted");
        res.status(200).json("Todo deleted");
    } catch (error) {
        console.log(error.message);
    }
})

export default todoRouter;

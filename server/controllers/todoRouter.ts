import express, { response } from 'express';
import pool from '../db';

const todoRouter = express.Router();

//create a todo

todoRouter.post('/', async (req, res) => {
    const body = req.body;

    try {
        console.log(req.body);
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", 
        [body.description]);
        res.status(200).json(newTodo);
    } catch (error) {
        console.log(error.message);
    }
})

//get all todos

todoRouter.get('/', async (req, pos) => {
    try {
        console.log("works");
        
    } catch (error) {
        console.log(error.message);
    }
})

//get a todo

//update a todos

//delete a todo


export default todoRouter;
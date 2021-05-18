"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db"));
const todoRouter = express_1.default.Router();
//set table for environment
let table = 'todo';
if (process.env.NODE_ENV === 'development') {
    table = 'todo_dev';
}
else if (process.env.NODE_ENV === 'test') {
    table = 'todo_test';
}
console.log(`Using table: ${table} in environment: ${process.env.NODE_ENV}`);
//create a todo
todoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        console.log(req.body);
        const newTodo = yield db_1.default.query(`INSERT INTO ${table} (description) VALUES($1) RETURNING *`, [body.description]);
        res.status(200).json(newTodo.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}));
//get all todos
todoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield db_1.default.query(`SELECT * FROM ${table} `);
        res.status(200).json(allTodos.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}));
//get a todo
todoRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield db_1.default.query(`SELECT * FROM ${table} WHERE todo_id = ($1)`, [id]);
        res.status(200).json(todo.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}));
//update a todos
todoRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoUpdate = req.body;
        const { id } = req.params;
        const updateTodo = yield db_1.default.query(`UPDATE ${table}  SET description = ($1) WHERE todo_id = ($2)`, [todoUpdate.description, id]);
        res.status(200).json("ToDo was updated");
    }
    catch (error) {
        console.log(error.message);
    }
}));
//delete a todo
todoRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield db_1.default.query(`DELETE FROM ${table} WHERE todo_id = ($1)`, [id]);
        console.log("todo deleted");
        res.status(200).json("Todo deleted");
    }
    catch (error) {
        console.log(error.message);
    }
}));
exports.default = todoRouter;

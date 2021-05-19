import pool from '../db';
import app from '../app';
import request from 'supertest';
import helper from './helper';

const api = request(app);
const table = 'todo_test';
const column = 'description';

//clearing database before each test
beforeEach(async () => {
	try {
		console.log(`clearing table: ${table}`);
		await pool.query(`DELETE FROM ${table}`);
		console.log(`database cleared`);

		await pool.query(`INSERT INTO ${table} (${column}) VALUES($1) RETURNING *`, [helper.iniatialToDos[0].description]);
		await pool.query(`INSERT INTO ${table} (${column}) VALUES($1) RETURNING *`, [helper.iniatialToDos[1].description]);
		await pool.query(`INSERT INTO ${table} (${column}) VALUES($1) RETURNING *`, [helper.iniatialToDos[2].description]);

		console.log('Table populated');

	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
})

describe("GET /", () => {
	test("It should respond with an array of ToDos", async () => {
		const allTodos = await api.get('/todo/');
		expect(allTodos.body).toHaveLength(3);
		expect(allTodos.body[0]).toHaveProperty("description");
		expect(allTodos.statusCode).toBe(200);
	})
})

describe("POST /", () => {
	test("A new ToDo can be added", async () => {
		const newTodo = {
            description: "The Guide For API Testing"
        }
		await api 
			.post('/todo/')
			.send(newTodo)
			.expect(200)
			.expect('Content-Type', /application\/json/)
		const allTodos = await api.get('/todo/');
		expect(allTodos.body).toHaveLength(4);
		expect(allTodos.body[3].description).toContain("The Guide For API Testing");
		expect(allTodos.statusCode).toBe(200);
	})
})

describe("PUT /", () => {
	test("A new ToDo can be updated", async () => {
		const newTodo = {
            description: "The Guide For API Testing"
        }
		const toUpdate = await api 
			.post('/todo/')
			.send(newTodo)
			.expect(200)
			.expect('Content-Type', /application\/json/);

		console.log("ID", toUpdate.body);

		await api
			.put(`/todo/${toUpdate.body.todo_id}`)
			.send({description: "updated"})
			.expect(200);

		const updatedStudentBody = await api
			.get(`/todo/${toUpdate.body.todo_id}`)
			.expect(200);

		console.log("UPDATED ITEM", updatedStudentBody.body)
		expect(updatedStudentBody.body.description).toBe("updated");
		expect(updatedStudentBody.body).toHaveProperty("description");
		expect(updatedStudentBody.statusCode).toBe(200);
	})
})

describe("DELETE /", () => {
	test("A ToDo can be deleted", async () => {
		const newTodo = {
            description: "The Guide For API Testing"
        }
		const toUpdate = await api 
			.post('/todo/')
			.send(newTodo)
			.expect(200)
			.expect('Content-Type', /application\/json/);

		console.log("ID", toUpdate.body);

		const deletedStudent = await api
			.delete(`/todo/${toUpdate.body.todo_id}`)
			.expect(200);

		expect(deletedStudent.body).toEqual({message: "Todo deleted"});

		const allTodos = await api
			.get('/todo/')
			.expect(200);
		expect(allTodos.body).toHaveLength(3);
	})
})

afterAll(async () => {
	await pool.end();
	console.log('pool has drained');
})
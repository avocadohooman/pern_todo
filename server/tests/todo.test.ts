import pool from '../db';
import app from '../index';
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

// afterAll(async () => {
// 	await pool.end();
// 	console.log('pool has drained');
// })
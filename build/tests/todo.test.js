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
const db_1 = __importDefault(require("../db"));
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const helper_1 = __importDefault(require("./helper"));
const api = supertest_1.default(index_1.default);
const table = 'todo_test';
const column = 'description';
//clearing database before each test
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`clearing table: ${table}`);
        yield db_1.default.query(`DELETE FROM ${table}`);
        console.log(`database cleared`);
        yield db_1.default.query(`INSERT INTO ${table} (${column}) VALUES($1) RETURNING *`, [helper_1.default.iniatialToDos[0].description]);
        yield db_1.default.query(`INSERT INTO ${table} (${column}) VALUES($1) RETURNING *`, [helper_1.default.iniatialToDos[1].description]);
        yield db_1.default.query(`INSERT INTO ${table} (${column}) VALUES($1) RETURNING *`, [helper_1.default.iniatialToDos[2].description]);
        console.log('Table populated');
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
}));
describe("GET /", () => {
    test("It should respond with an array of ToDos", () => __awaiter(void 0, void 0, void 0, function* () {
        const allTodos = yield api.get('/todo/');
        expect(allTodos.body).toHaveLength(3);
        expect(allTodos.body[0]).toHaveProperty("description");
        expect(allTodos.statusCode).toBe(200);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.end();
    console.log('pool has drained');
}));

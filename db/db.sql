-- CREATE DATABASE perntodo;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE todo_test (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE todo_dev (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
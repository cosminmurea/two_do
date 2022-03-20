CREATE DATABASE two_do;

CREATE TABLE tasks (
    task_id serial PRIMARY KEY,
    task_description VARCHAR(255) UNIQUE NOT NULL,
    is_completed BOOLEAN NOT NULL
);

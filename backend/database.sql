-- \l -> list all databases
-- \c <database_name> -> connect to database
-- \dt -> list all tables

CREATE DATABASE mybooks;

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published CHAR(4) NOT NULL,
    genre VARCHAR(100),
    description TEXT
);
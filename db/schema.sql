DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE DATABASE employees_db;

CREATE TABLE department (

  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  department_name  VARCHAR(30) 
);

CREATE TABLE roles (

  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10, 4),
  department_id INTEGER
);

CREATE TABLE employee (

  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30), 
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER
);
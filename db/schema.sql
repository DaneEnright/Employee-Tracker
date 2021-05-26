DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (

  id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
  department_name  VARCHAR(30),
  department_id INTEGER 
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

INSERT INTO department (department_name, department_id) values ("Sales", 1);
INSERT INTO department (department_name, department_id) values ("Engineering", 2);
INSERT INTO department (department_name, department_id) values ("Finance", 3);
INSERT INTO department (department_name, department_id) values ("Legal", 4);

INSERT INTO roles (title, salary, department_id) values ("Sales Lead", 100000, 1);
INSERT INTO roles (title, salary, department_id) values ("Sales Person", 80000, 1);
INSERT INTO roles (title, salary, department_id) values ("Lead Engineer", 150000, 2);
INSERT INTO roles (title, salary, department_id) values ("Software Engineer", 120000, 2);
INSERT INTO roles (title, salary, department_id) values ("Secretary", 60000, 3);
INSERT INTO roles (title, salary, department_id) values ("Accountant", 125000, 3);
INSERT INTO roles (title, salary, department_id) values ("Legal Team Lead", 250000, 4);
INSERT INTO roles (title, salary, department_id) values ("Lawyer", 190000, 4);
INSERT INTO roles (title, salary, department_id) values ("Lead Engineer", 150000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("John", "Doe", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Mike", "Chan", 2, null) ;
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Ashley", "Rodriguez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Kevin", "Tupic", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Jane", "Doe", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Malia", "Brown", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Sarah", "Lourd", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Tom", "Allen", 8, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Christian", "Eckenrode", 9, null);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;
//import dependensie
//import db/index.js
//inqurier for questions
// switch case for action functions
// functions that are connected to switch case

const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
const { connection } = require("./db/index");
const myslq = require("mysql");
const table = require("console.table");
const dbindex = require("./db/index");

const startApp = () => {
  inquirer
    .prompt([
      {
        name: "start",
        type: "list",
        message: "Which option would you like to choose",
        choices: [
          "View All Employees",
          "View Departments",
          "View Roles",
          "Add New Employee",
          "Add New Department",
          "Add new Role",
          "Update Roles",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.start) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View Departments":
          viewDepartments();
          break;
        case "View Roles":
          viewRoles();
          break;
        case "Add New Employee":
          createEmployee();
          break;
        case "Add New Department":
          createDepartment();
          break;
        case "Add New Role":
          createRole();
          break;
        case "Update Roles":
          updateRole();
          break;
      }
    });
};

const viewEmployees = () => {
  connection.query("SELECT * FROM employee", (err, data) => {
    if (err) throw err;
    console.table(data);
    startApp();
  });
};

const viewDepartments = () => {
  connection.query("SELECT * FROM department", (err, data) => {
    if (err) throw err;
    console.table(data);
    startApp();
  });
};

const viewRoles = () => {
  connection.query("SELECT * FROM roles", (err, data) => {
    if (err) throw err;
    console.table(data);
    startApp();
  });
};

const createEmployee = () => {
  connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: "Dane",
      last_name: "Enright",
      role_id: "10",
      manager_id: "null",
    },
    (err, res) => {
    //   if (err) throw err;
      connection.end;
    }
  );
};

const createDepartment = () => {
  connection.query(
    "INSERT INTO department SET ?",
    {
      department_name: "Security",
    },
    (err, res) => {
      if (err) throw err;
      connection.end;
    }
  );
};

const createRole = () => {
  connection.query(
    "INSERT INTO roles SET ?",
    {
      title: "Engineer",
    },
    (err, res) => {
      if (err) throw err;
      connection.end;
    }
  );
};

const updateRole = () => {
    const query = connection.query(
        "UPDATE roles SET ? WHERE ?"
        
    )
};

startApp();

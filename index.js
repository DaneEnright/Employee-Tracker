//import dependensie
//import db/index.js
//inqurier for questions
// switch case for action functions
// functions that are connected to switch case

const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
require("console.table");
const dbindex = require("./db/index");

const start = () => {
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
     .then ((answer) => {
         switch (answer.start) {
             case "View All Employees":
                 return viewEmployees();
                 break;
            case "View Departments":
                return viewDepartments();
                break;
            case "View Roles":
                return viewRoles();
                break;
            case "Add New Employee":
                return addEmployee();
                break;
            case "Add New Department":
                return addDepartment();
                break;
            case "Add New Role":
                return addRole();
                break;
            case "Update Roles":
                return updateRole();
                break;
            
         }
     })
}
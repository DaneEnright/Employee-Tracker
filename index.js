const inquirer = require("inquirer");
const mysql = require("mysql");


const connection = mysql.createConnection({

    host: "localhost",
    port: 2000,
    user: "root",
    password: "sqlpassword",
    database: "top_songsDB",
   
   })
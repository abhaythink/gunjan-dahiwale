
import mysql from "mysql2";

import dotenv from "dotenv";
// const dotenv = require('dotenv')

dotenv.config();


export const db = mysql.createConnection(
    {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        password: process.env.MYSQL_PASSWORD
    }
);

// const departmentTable = `
//         CREATE TABLE IF NOT EXISTS department (
//         department_id INT AUTO_INCREMENT PRIMARY KEY,
//         department_name VARCHAR(100) NOT NULL
//         )`;


// const EmployeeTable = `
//         CREATE TABLE IF NOT EXISTS employee (
//         employee_id INT AUTO_INCREMENT PRIMARY KEY,
//         f_name VARCHAR(100) NOT NULL,
//         l_name VARCHAR(200) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE,
//         phone INT(12),
//         salary DECIMAL(10, 2) NOT NULL,
//         department_id INT,
//         FOREIGN KEY(department_id) REFERENCES department(department_id)
//         );
// `;


// db.query(departmentTable, (err, result) => {
//     if (err)
//         console.log(err);
//     console.log(result, "Department table created successfully");

  
// })

// db.query(EmployeeTable, (err, result) => {
//     if (err)
//         console.log(err);
//     console.log(result, "Employee table created successfully");    
  
// })

const uploadFile = (`
    CREATE TABLE uploadFiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    data LONGBLOB NOT NULL
);`)
    
db.query(uploadFile, (err, res) => {
    if(err)
        console.log(err);
    console.log(res); 
})


// module.exports = {pool}; 
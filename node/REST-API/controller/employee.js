import { db } from '../utils/db.js';

//getAllEmployee
export const getAllEmployee = () => {
    const get = 'SELECT * FROM employee';
    db.execute(get, (err, result) => {
        if (err) console.log(err);
        return result;
    })
}

//insert employee
export const insertEmployee = (f_name, l_name, email, phone, salary, department_id, callback) => {
    const create = `INSERT INTO employee (f_name, l_name, email, phone, salary, department_id) VALUES (?, ?, ?, ?, ?, ?)`;

    db.execute(create, [f_name, l_name, email, phone, salary, department_id], (err, result) => {
        if (err) {
            console.error("Error inserting employee:", err);
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

//insert department
export const InsertDepartment = (department_name) => {
    const create = `INSERT INTO department (department_name) VALUES (?)`;
    db.execute(create, [department_name], (err, result) => {
        if(err)
        {
            if (err.code === 'ER_DUP_ENTRY') {
                console.log("Duplicate department name! Entry already exists.");
            } else {
                console.error("Error inserting data:", err);
            }
        }
        return result;
    })
}
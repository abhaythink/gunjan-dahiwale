import {getAllEmployee, insertEmployee, InsertDepartment} from '../controller/employee.js';
// import express from "express";
import {Router} from "express";
import {db} from "../utils/db.js";
import fs from "fs"
const router = Router();

import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

// app.use(app.Router);
// router.initialize(app);

 router.get('/', () => {
    getAllEmployee( (err, result) => {
        if(err)
            return result.status(500).json({err: err.statusMessage})
        result.json(result);
    })
});

router.post('/employees', async (req, res) => {
    console.log("Received request body:", req.body);
    const { f_name, l_name, email, phone, salary, department_id } = req.body;

    if (!f_name || !l_name || !email || !phone || !salary || !department_id) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    insertEmployee(f_name, l_name, email, phone, salary, department_id ,(err, result) => {
        if(err)
            return res.status(500).json({err: err})
        res.status(201).json("Data inserted successfully", result);
    })
})

router.post('/department', async (req, res) => {
    const {department_name} = req.body;


    InsertDepartment(department_name, (err, result) => {
        if(err)
        {
            return res.status(500).json({err: err})
        }
        res.status(201).json("Data inserted successfully", result);
    })
})

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
  
    const { filename, path } = req.file;
    const fileData = fs.readFileSync(path); // Read file as buffer
  
    const sql = "INSERT INTO uploadFiles (name, data) VALUES (?, ?)";
    db.query(sql, [filename, path, fileData], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error saving file to database.");
      }
      res.send("File uploaded successfully!");
    });
  });
  

// Download File
router.get("/files/:id", (req, res) => {
  db.query("SELECT * FROM files WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.download(result[0].path, result[0].name);
    } else {
      res.status(404).send("File not found");
    }
  });
});


export default router;


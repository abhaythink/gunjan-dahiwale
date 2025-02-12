import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import feedRoutes from './routes/feed.js';
import userRoutes from './routes/auth.js';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/feed', feedRoutes);
app.use('/auth', userRoutes);

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString()+ '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype==='image/png' || file.mimetype==='image/jpg' || file.mimetype==='image/jpeg')
        cb(null, true);
    else
        cb(null, false);
}

app.use(multer({fileFilter: fileStorage, fileFilter: fileFilter}).single('image'));

app.listen(8000, () => {
    console.log("Server running on 8000");
})
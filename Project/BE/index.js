import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import { connectDB } from "./utils/db.js";
import feedRoutes from "./routes/feed.js";
import userRoutes from "./routes/auth.js";
import ProfilePictureRoutes from "./routes/profilePicture.js";

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next(); 
});



const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => {
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    cb(null, timestamp + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) cb(null, true);
  else cb(null, false);
};

app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"));


app.use("/feed", feedRoutes);
app.use("/auth", userRoutes);
app.use("/picture", ProfilePictureRoutes);

app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server`);
    err.status = 'fail';
    err.statusCode = 404;
    next(err);
})

app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
        status: error.statusCode,
        message : error.message
    });
}); 

const startServer = async () => {
  await connectDB(); 
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import { connectDB } from "./utils/db.js";
import feedRoutes from "./routes/feed.js";
import userRoutes from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next(); // Pass control to the next middleware/route
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


const startServer = async () => {
  await connectDB(); 
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();


import express from "express";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';
import connectDB from "./db/connection.js";
import multer from "multer";

import ArticleRouter  from "./routes/ArticleRouter.js";
import UserRouter  from "./routes/UserRouter.js";
import AuthRouter from "./routes/AuthRouter.js"
import CategoryRouter from "./routes/CategoryRouter.js"

import cors from "cors"; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

console.log(__dirname);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(express.json());

const port = process.env.PORT || 5000;

try {
  connectDB();
  app.listen(port , () => {console.log(`Server is running on port ${port}`)})

} catch(error) {
  console.log(error)
}

// auth routes
app.use("/api/auth" , AuthRouter);

// articles routes
app.use("/api/articles", ArticleRouter); 

// category routes
app.use("/api/categories", CategoryRouter); 

// users routes
app.use("/api/users", UserRouter); 



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  // return res.status(statusCode).json({
  //   success: false,
  //   statusCode,
  //   message,
  // });
})









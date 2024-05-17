
import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/connection.js";

import ArticleRouter  from "./routes/ArticleRouter.js";
import UserRouter  from "./routes/UserRouter.js";

import AuthRouter from "./routes/AuthRouter.js"

import cors from "cors"; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

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










import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/connection.js";

import ArticleRouter  from "./routes/ArticleRouter.js";
import UserRouter  from "./routes/UserRouter.js";

import AuthRouter from "routes/routes/AuthRouter.js"

import cors from "cors"; 
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const port = process.env.PORT;

try {
  connectDB();
  app.listen(port , () => {console.log('Server is running on port 5000')})

} catch(error) {
  console.log(error)
}

// articles routes
app.use("/api/articles", ArticleRouter); 

// users routes
app.use("/api/users", UserRouter); 

// auth routes
app.use("/api/auth" , AuthRouter)









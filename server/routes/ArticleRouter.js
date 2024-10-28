
import express from "express";

import {
  getArticles ,
  getArticle ,
  getUserArticles,
  createArticle ,
  updateArticle ,
  deleteArticle
} from "../controllers/ArticlesController.js"


const articleRouter = express.Router();


// get all artiles
articleRouter.get("/", getArticles)

// post a new article
articleRouter.post("/", createArticle)

// get article using id (article id)
articleRouter.get("/:id", getArticle)

// get articles of user using id (user id)
articleRouter.post("/user", getUserArticles)

// update an article using id
articleRouter.put("/update/:id", updateArticle)

// delete an article using id
articleRouter.delete("/delete/:id", deleteArticle)


export default articleRouter;

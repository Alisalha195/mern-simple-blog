
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
articleRouter.post("/user", getArticle)

// update an article using id
articleRouter.put("/update/:id", updateArticle)

// delete an article using id
articleRouter.delete("/delete/:id", deleteArticle)

// router.post("/articles",  async (request, response) => {

  // const articleData = {
  //   title: request.body.title ,
  //   content : request.body.content,
  //   date : request.body.date
  // }

  // const article = new ArticleModel(articleData);

  // const article =  await Article.create(articleData);

  // const article = new ArticleModel(request.body);
  // console.log(article)
  // try {
  //   await article.save();
  //   response.send(article);
  // } catch (error) {
  //   response.status(400).send(error);
  // }
// });

export default articleRouter;

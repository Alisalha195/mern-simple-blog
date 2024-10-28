
import express from "express";

import { 
	getCategories ,
	createCategory,
	getCategory,
	updateCategory,
	deleteCategory


} from '../controllers/CategoriesController.js';


const categoriesRouter = express.Router();

// get all artiles
categoriesRouter.get("/", getCategories)

// post a new article
categoriesRouter.post("/", createCategory)

// get article using id (article id)
categoriesRouter.get("/:id", getCategory)

// get articles of user using id (user id)
// articleRouter.post("/user", getUserArticles)

// update an article using id
categoriesRouter.put("/update/:id", updateCategory)

// delete an article using id
categoriesRouter.delete("/delete/:id", deleteCategory)

export default categoriesRouter;
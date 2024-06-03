

import mongoose from "mongoose";
import Article from "../models/article.js"

// get all articles
export const getArticles = async (req , res) => {
	
	try {
		const articles = await Article.find({});
		return res.status(200).json(articles)
	} catch(error) {
		res.status(500).json({message:error.message})
		return res;
	}
}

// get a specific article using id of article
export const getArticle = async (req , res) => {
	
	try {
		const {id} = req.params
		const article = await Article.findById(id);
		console.log('Article is',article)
		return res.json(article)
	} catch(error) {
		console.log('ERROR IN DATABASE')
		return res.status(500).json({status:500});
	}
}

// get all articles of a specific user using id of user
export const getUserArticles = async (req , res) => {
	
	try {
		const {userid} = req.body;
		// console.log('user id in controller :',userid)
		const articles = await Article.find({authorId:userid});
		// console.log('articles are returned')
		return res.status(200).json(articles)
	} catch(error) {
		console.log('articles are not returned')
		res.status(500).json(error.message)
	}
}

export const createArticle = async (req , res) => {
	
	try {
		const {title , content ,author,authorId, categoryId} = req.body
		
		const article = await Article.create({title , content, author,authorId, categoryId});
		console.log('the new article is',article)
		
		// res.status(200);
		// article.status = 200
	    // res.json(article)
		return res.json({...article, status:200  });
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const updateArticle = async (req , res) => {
	
	try {
		const {id} = req.params
		const {title , content} = req.body
		const article = await Article.findByIdAndUpdate(id,{title , content});
		return res.status(200).json(article)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const deleteArticle = async (req , res) => {
	console.log('delete in controller')
	try {
		const {id} = req.params;
		const article = await Article.findByIdAndDelete(id);
		return res.status(200).json(article)
	} catch (error) {
		res.status(500)
		res.json({error})
		return res;
	}

}


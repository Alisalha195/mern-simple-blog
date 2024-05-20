

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
		return res.status(200).json(article)
	} catch(error) {
		res.status(500).send(error.message)
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
		const {title , content ,author,authorId, likes, dislikes} = req.body
		
		const article = await Article.create({title , content, author,authorId, likes, dislikes});
		return res.status(200).json(article)
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
	
	try {
		const {id} = req.params;
		const article = await Article.findByIdAndDelete(id);
		return res.status(200).json(article)
	} catch (error) {
		res.status(500).send(error.message)
	}

}


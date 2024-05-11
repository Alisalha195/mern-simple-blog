

import mongoose from "mongoose";
import Article from "../models/article.js"


export const getArticles = async (req , res) => {
	
	try {
		const articles = await Article.find({});
		return res.status(200).json(articles)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const getArticle = async (req , res) => {
	
	try {
		const {id} = req.params
		const article = await Article.findById(id);
		return res.status(200).json(article)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const createArticle = async (req , res) => {
	
	try {
		const {title , content, author, likes, dislikes} = req.body
		
		const article = await Article.create({title , content, author, likes, dislikes});
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


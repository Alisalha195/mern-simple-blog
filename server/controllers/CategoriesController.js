
import mongoose from "mongoose";
import Category from "../models/category.js"

export const getCategories = async (req, res) => {
	try {
		const categories = await Category.find({});
		return res.status(200).json(categories)
	} catch(error) {
		res.status(500).json({message:error.message})
		return res;
	}
}

export const createCategory = async (req, res) => {
	try {
		const {title ,authorId} = req.body
		
		const category = await Category.create({title ,authorId });
		console.log('the new category is',category)
		return res.status(200).json(category)
	} catch(error) {
		res.status(500).json(error.message)
	}
}

export const getCategory = (req, res) => {
	console.log('getCategory');
}

export const updateCategory = (req, res) => {
	console.log('getCategory');
}

export const deleteCategory = (req, res) => {
	console.log('getCategory');
}
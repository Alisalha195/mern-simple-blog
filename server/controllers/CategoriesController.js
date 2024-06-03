
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
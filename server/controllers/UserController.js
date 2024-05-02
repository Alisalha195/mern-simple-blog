 

import mongoose from "mongoose";
import User from "../models/user.js"


export const getUsers = async (req , res) => {
	
	try {
		const users = await User.find({});
		return res.status(200).json(users)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const getUser = async (req , res) => {
	
	try {
		const {id} = req.params
		const user = await User.findById(id);
		return res.status(200).json(user)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const createUser = async (req , res) => {
	
	try {
		const {name , email, password} = req.body
		const user = await User.create({name , email, password});
		return res.status(200).json(user)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const updateUser = async (req , res) => {
	
	try {
		const {id} = req.params
		const {name , email, password} = req.body
		const user = await User.findByIdAndUpdate(id,{name , email, password});
		return res.status(200).json(user)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const deleteUser = async (req , res) => {
	
	try {
		const {id} = req.params;
		const user = await User.findByIdAndDelete(id);
		return res.status(200).json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}

}


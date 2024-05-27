 

import mongoose from "mongoose";
import User from "../models/user.js"
import bcryptjs from 'bcryptjs';


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
		res.status(500)
		res.json(error)
		return res;
	}
}

export const createUser = async (req , res) => {
	
	try {
		const {username , email, password} = req.body
		const user = await User.create({username , email, password});
		return res.status(200).json(user)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const editUser = async (req , res) => { 

	try {
		const {id} = req.params
		const {firstname,lastname, username,age , password, jobTitle ,breifInfo} = req.body;

		console.log("req.params",req.params);
		console.log("req.body",req.body);

		const hashedPassword = bcryptjs.hashSync(password, 10);
		// if(firstname)
		const user = await User.findByIdAndUpdate(id,{firstname,lastname, username,age , password: hashedPassword, jobTitle ,breifInfo});

		console.log("json(user) is",user)
		return res.status(200).json(user)
	} catch(error) {
		return res.status(500).json(error)
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


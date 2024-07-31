 
import fs from "fs";
import mongoose from "mongoose";
import User from "../models/user.js"
import bcryptjs from 'bcryptjs';


export const getUsers = async (req , res) => {
	
	try {
		const users = await User.find({isAdmin : false});
		// console.log("users is controller : ",users);
		return res.status(200).json(users)
	} catch(error) {
		res.status(500).send(error.message)
	}
}

export const getUser = async (req , res) => {
	
	try {
		const {id} = req.params
		const user = await User.findById(id);
		// console.log('user',user)
		return res.status(200).json(user)
	} catch(error) {
		res.status(500)
		res.json(error)
		return res;
	}
}
// original
export const createUser = async (req , res) => {
	
	try {
		const {username , email, password} = req.body
		const user = await User.create({username , email, password});


		return res.status(200).json(user);


	} catch(error) {
		res.status(500).send(error.message)
	}
}
// copy
export const create2User = async (req , res) => {
	
	try {
		const {username , email, password} = req.body
		// const user = await User.create({username , email, password});

		if(req.file)
			console.log('file',req.file)
		
		return res.status(200).json(user);


	} catch(error) {
		res.status(500).send(error.message)
	}
}

// original
export const editUser2 = async (req , res) => { 

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

export const editUser = async (req , res) => { 

	console.log("req.body :",req.body)
	try {
		const {id} = req.params;
		const photo = req.file ? req.file.filename :"";
		console.log('photo in edit :',photo)
		const {firstname,lastname, username,age , password, jobTitle ,breifInfo, passwordStatus, isAdmin} = req.body;
		console.log(firstname,lastname, username,age , password, jobTitle ,breifInfo, isAdmin);
		let correctPassword = getCorrectPassword(password, passwordStatus);

		const user = await User.findOne({_id:id});

		if(!user)
			return res.status(500).json("user was not found");

		console.log('user from DB is :',user)
		
		const updatedUser = await User.findByIdAndUpdate(id,{
			firstname: firstname || user.firstname,
			lastname: lastname || user.lastname, 
			username: username || user.username,
			age :  age || user.age,
			password: correctPassword,
			image: photo || user.image,
			jobTitle:  jobTitle || user.jobTitle,
			breifInfo:  breifInfo || user.breifInfo,
			isAdmin: isAdmin 
		});

		// const updatedUser = await User.updateOne
		console.log("json(updatedUser) is",updatedUser) 
		return res.status(200).json(updatedUser)
		// return res.status(200).json(req.body)
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

const getCorrectPassword = (password , passwordStatus) => {
	if(passwordStatus == "same")
		return password;
	else if(passwordStatus == "empty")
		return password;
	
		return bcryptjs.hashSync(password, 10);
}



export const checkFile = (req, res)=> {
	

	if (fs.existsSync(req.body.filePath)) {
	  console.log(`The file  exists.`);
	  return res.json({status:true});
	} else {
	  console.log(`The file does not exist.`);
	  return res.json({status:false});
	}
}


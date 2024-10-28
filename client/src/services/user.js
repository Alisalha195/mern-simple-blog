import axios from "axios";

const signupUrl = "http://localhost:5000/api/auth/signup"
const usersUrl = "http://localhost:5000/api/users"
const checkFileUrl = "http://localhost:5000/api/users/checkFile"

export const createUserService = async(userData)=> {

	// console.log("updatedData in service :",updatedData.get("image"))
	console.log("createData in service :",userData)
	// console.log("userId in service :",userId);

	const {data} = await axios.post(signupUrl, userData 
  );
	console.log('data in service :',data.username, data.image);
	return data;
}

export const updateUserService = async(updatedData, userId)=> {

	console.log("updatedData in service :",updatedData.get("isAdmin"))
	// console.log("updatedData in service :",updatedData)
	console.log("userId in service :",userId);

	const {data} = await axios.put(`${usersUrl}/update/${userId}`, updatedData 
  );
	console.log('data in service :',data.username, data.image);
	return data;
}

export const checkFile = async (filePath)=> {
	const {data} =  await axios.patch(checkFileUrl , {filePath:filePath});
	console.log('data in axios :',data)
	return data.status
	// const response = 
}
import axios from "axios";

const editUserUrl = "http://localhost:5000/api/users/update"
const checkFileUrl = "http://localhost:5000/api/users/checkFile"

export const updateUserService = async(updatedData, userId)=> {

	// console.log("updatedData in service :",updatedData.get("image"))
	console.log("updatedData in service :",updatedData)
	console.log("userId in service :",userId);

	const {data} = await axios.put(`${editUserUrl}/${userId}`, updatedData 
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
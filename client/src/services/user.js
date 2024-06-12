import axios from "axios";

const editUserUrl = "http://localhost:5000/api/users/update"

export const updateUserService = async(updatedData, userId)=> {

	console.log("updatedData in service :",updatedData.get("image"))
	// console.log("userId in service :",userId);

	const {data} = await axios.put(`${editUserUrl}/${userId}`, updatedData 
  );
	console.log('data in service :',data.username, data.image);
	return data;
}
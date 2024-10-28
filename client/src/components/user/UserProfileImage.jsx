// import Image from '../../assets/images/backgroundhero.jpg';
import {useState, useEffect} from 'react';
import fs from "fs";

import anonymousUser from "../../assets/images/user.png"
import {useDispatch,useSelector} from 'react-redux';
import LoadingBox from "../../hooks/useLoading"

import {getUser, checkFileImage} from "../../redux/UserSlice.js";

const UserProfileImage = ({size , rounded, bordered, userId ,userImage}) => {

	

	const dispatch = useDispatch();
	
	// const {user, imageExists} = useSelector(state => state.user) ;
	const {currentUser} = useSelector(state => state.auth) ;
	const{actionType,showActionSuccessMsg}=useSelector(state=>state.successMsg);

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading; 
	const setLoading = loadingProps.setLoading;

	const imagesFolder = "uploads/user";
	const imagesFolderUrl = `http://localhost:5000/${imagesFolder}`;
	
	// console.log('userId in header :',userId);
	// console.log('currentUser in header :',currentUser.id);
	// console.log("user image in userprofileimage is : ",userImage)
	// useEffect(()=>{ 
		// dispatch(getUser(userId));
		// console.log("dispatch(getUser(userId));")
		// console.log(";")
		// (currentUser.id == userId 
		// 	? dispatch(getUser(currentUser.id));
		// 	: dispatch(getUser(userId));
		// 	)
		
		// dispatch(checkFileImage(`${imagesFolder}/${currentUser?.id}/${user?.image}`))
	// },[loading]);

	// useEffect(()=>{
		// dispatch(getUser(currentUser.id));

		// dispatch(checkFileImage(`${imagesFolder}/${currentUser?.id}/${user?.image}`))
		
		// dispatch(checkFileImage(`${imagesFolder}/${userId}/${
		// 	user?.image}`))

		// console.log("dispatch(checkFileImage);")
		// console.log(";")
	// },[loading, showActionSuccessMsg]);

	const getSize = (size) => {

		if(size == 'full')
			return "100%"
		else if(size == 'xs')
			return "42px"
		else if(size == 'sm')
			return "50px"
		else if (size == 'md')
			return "65px"
		else if (size == 'lg')
			return "75px"
		else if((typeof(size)== "number" ) && (size < 800))
			return `${size}px`
	}

	const isRounded = (rounded)=> {
		
		if(rounded)
			return "50%"
		else 
			return"5px"
	} 

	const getUserImage = () => {
		
		// if(currentUser.id == userId) {
		// 	
		// }
		let image = ""
		if(userImage == "anonymous.png") {
			image =  (`http://localhost:5000/${imagesFolder}/anonymous.png`)
		} else {
			image =  (`${imagesFolderUrl}/${userId}/${userImage}`)
		}

		// console.log('img in image : ',image)
		return image;

	}
	return (
		<div className="flex "> 
			<div className={bordered ?"bg-gray-900 [border:1px_solid_#0f0]" : "bg-gray-900"} 
			      style={{borderRadius:isRounded(rounded), width:getSize(size) , height:getSize(size) }}>

{/* 				<img src={user?.image  */}
{/* 				           ? (imageExists) */}
{/* 				               */}
{/* 				              ? (`${imagesFolderUrl}/${userId}/${user.image}`) */}
{/* 				              : anonymousUser */}
{/*  */}
{/* 				           : anonymousUser */}
{/* 				     } */}
{/*  */}
{/* 				style={{width:"100%" , height:"100%" ,borderRadius:isRounded(rounded) }}/> */}

				<img src={userImage 
				           ? getUserImage()
				              
				           : anonymousUser
				     }

				style={{width:"100%" , height:"100%" ,borderRadius:isRounded(rounded) }}/>

			    
			</div>
		</div>	
	)
	
}
export default UserProfileImage
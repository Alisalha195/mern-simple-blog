
// import UserProfileImage from "../../components/user/UserProfileImage"
import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate ,useParams} from 'react-router-dom';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {useDispatch,useSelector} from 'react-redux';

import {loginUserAsync, reset} from "../../redux/AuthSlice.js";
import {getUserArticles} from "../../redux/ArticleSlice.js";
import {getUser} from "../../redux/UserSlice.js";
import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";

import AboutBox from "../../components/user/profile/AboutBox"
import UserArticles from "../../components/user/profile/UserArticles"

// import user from "../../assets/images/user.png"
// import EditProfileBox from "../../components/user/profile/EditProfileBox"


const Profile = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
    const params = useParams();
    const [successMsg , setSuccessMsg] = useState("");
    const [showSuccessMsg , setShowSuccessMsg] = useState(false);

	// const [openEditBox, setOpenEditBox] = useState(false);

	const {currentUser, isSuccess} = useSelector(state => state.auth) ;
	const {articles, error ,isLoading} = useSelector(state => state.article);
	const {user} = useSelector(state => state.user) ;
	const{actionType,showActionSuccessMsg}=useSelector(state=>state.successMsg);
	
	const loadingProps = LoadingBox();
	const loading = loadingProps.loading; 
	const setLoading = loadingProps.setLoading;

	useEffect(()=>{
		if(!params.id)
	      navigate("/notfound");

		dispatch(getUser(params.id))

		// console.log('user in profile is :',user)
	},[navigate,dispatch,showActionSuccessMsg, successMsg]);

	useEffect(()=> {
	  
	  dispatch(getUserArticles(params.id))

	  // if(!articles)
	  // 	console.log('This User Has No Articles ! ',error)
	  // else
	  // 	console.log("Articles Found",articles)
   //    if(error)
   //    	console.log('error from slice is :',error)
   //    else
   //    	console.log('no error from slice')
	}, [dispatch, user, showActionSuccessMsg , successMsg]);

	useEffect(()=>{

		if(successMsg && showActionSuccessMsg) { 
			// console.log('actionType ',actionType)
			setTimeout(()=>{
				dispatch(setShowActionSuccessMsg(false))
				setSuccessMsg('');
				dispatch(setActionType(""))
			},3000);
		} 

	},[successMsg,actionType,showActionSuccessMsg]);

	useEffect(()=>{
		if(actionType == "add")
			setSuccessMsg("added successfuly");
		else if(actionType == "edit")
			setSuccessMsg("edited successfuly");
		else if(actionType == "delete")
			setSuccessMsg("deleted successfuly");
	},[actionType,successMsg,showActionSuccessMsg])


	if(loading){
		return <Loading />
	}
	return (
			<div className="xs:mb-[140px] sm:mb-[40px]">
				{/* Success Box */}
				{
					showActionSuccessMsg && 
					<div className="[position:absolute] [top:15px] [left:300px] bg-[#068132] [width:50%] p-1 rounded text-white">
						<div className="text-center">
							{successMsg} 
						</div>
					</div>
				}
				<AboutBox currentUser={currentUser} user={user} setActionType={setActionType}  />

				<div className="flex xs:justify-center md:justify-start ml-3 mt-6 mb-7 xs:text-[28px] sm:text-[32px] md:text-[36px]">
					<div className="xmd:basis-5/12 lg:basis-4/12 xl:basis-3/12 pl-1 border-b-4 border-b-gray-300 font-bold text-gray-700 "
						 
					>
						{user ? `${user.firstname}\`s Articles` : "No User Selected" }
					</div>

					<div className="flex flex-row justify-start mt-4 mr-5 ">
						{currentUser ? (currentUser.id == user._id) : false && 
						<span className="btn flex flex-col ml-4 xs:justify-center px-2  [border:1px_solid_#888] xs:text-[25px] xm:text-[28px] lg:text-[30px] text-[#fff] bg-[#00872b] [border-radius:8px]" 

							onClick={()=>{navigate("/articles/add"); dispatch(setActionType("add"));}}
						>
							add
						</span>}
					</div>
				</div>

				<UserArticles articles={articles}/>
			</div>
	)
}
export default Profile
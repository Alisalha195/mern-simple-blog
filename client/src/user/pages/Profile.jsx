
// import UserProfileImage from "../../components/user/UserProfileImage"
import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate ,useParams} from 'react-router-dom';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {useDispatch,useSelector} from 'react-redux';

import {loginUserAsync, reset} from "../../redux/AuthSlice.js";
import {getUserArticles} from "../../redux/ArticleSlice.js";
import {getUser} from "../../redux/UserSlice.js";

import AboutBox from "../../components/user/profile/AboutBox"
import UserArticles from "../../components/user/profile/UserArticles"


const Profile = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
    const params = useParams();
  
	const {currentUser, isSuccess} = useSelector(state => state.auth) ;
	const {articles, error ,isLoading} = useSelector(state => state.article);
	const {user} = useSelector(state => state.user) ;
	
	const loadingProps = LoadingBox();
	const loading = loadingProps.loading; 
	const setLoading = loadingProps.setLoading;

	useEffect(()=>{
		if(!params.id)
	      navigate("/notfound");

		dispatch(getUser(params.id))

		console.log('user in profile is :',user)
	},[navigate,dispatch]);

	useEffect(()=> {
	  
	  dispatch(getUserArticles(params.id))

	  if(!articles)
	  	console.log('This User Has No Articles ! ',error)
	  else
	  	console.log("Articles Found",articles)
      if(error)
      	console.log('error from slice is :',error)
      else
      	console.log('no error from slice')
	}, [dispatch, ])

	if(loading){
		return <Loading />
	}
	return (
			<div className="xs:mb-[140px] sm:mb-[40px]">
				<AboutBox currentUser={currentUser} user={user} />

				<div className="flex xs:justify-center md:justify-start ml-3 mt-6 mb-7 xs:text-[28px] sm:text-[32px] md:text-[36px]">
					<div className="xmd:basis-5/12 lg:basis-4/12 xl:basis-3/12 pl-1 border-b-4 border-b-gray-300 font-bold text-gray-700 "
						 
					>
						{user ? `${user.firstname}\`s Articles` : "No User" }
					</div>
				</div>

				<UserArticles articles={articles}/>
			</div>
	)
}
export default Profile
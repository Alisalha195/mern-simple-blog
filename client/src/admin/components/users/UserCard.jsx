

import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
// import Loading from "../../components/public/Loading";
// import LoadingBox from "../../hooks/useLoading"
// import {getUserArticles } from "../../redux/ArticleSlice.js";
// import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";




const UserCard = ({user}) => {

	
	return (
		<div className="bg-red-300 mb-2"> 
			 {user.username}
		</div>
	)
}
export default UserCard


import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import UserCard from "../../components/users/UserCard";
// import Loading from "../../components/public/Loading";
// import LoadingBox from "../../hooks/useLoading"
// import {getUserArticles } from "../../redux/ArticleSlice.js";
// import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";




const Users = ({users}) => {

	console.log('users in Users :',users);  
	return (
		<div className={(users.length > 1) ? "p-5 xs:mb-[100px] sm:mb-[30px]  [max-height:100vh] [overflow-y:scroll]"  : "p-4 "}> 

		    
			{
				users ?  
					<div className="">
						{ users.map(user => (<UserCard key={user._id} user={user} /> ))}
					</div>
				:
				<div>No Users Available</div>
			} 
		</div>
	)
}
export default Users

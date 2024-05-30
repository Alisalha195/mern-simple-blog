

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
		<div className="p-2"> 

		    <div className="flex flex-row ml-4 mb-4 text-[#555]">
		    	<span className="[border-bottom:2px_solid_#666] pr-3">
		    		Users
		    	</span>
		    </div>
			{
				users ?  
					<div className="[border:1px_solid_#888]">
						{ users.map(user => (<UserCard key={user._id} user={user} /> ))}
					</div>
				:
				<div>No Users Available</div>
			} 
		</div>
	)
}
export default Users

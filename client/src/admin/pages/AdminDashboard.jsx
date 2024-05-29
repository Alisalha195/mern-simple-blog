
import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {getAllUsers } from "../../redux/UserSlice.js";
import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";

import Users from "./users/Users";


const AdminDashboard = () => {

	const dispatch = useDispatch();
	const {users} = useSelector(state=>state.user);

	useEffect(()=> {
		dispatch(getAllUsers())
	},[]);


	return (
		<div> 
			<div className="flex flex-row justify-center mt-4 mb-3 text-[44px] font-bold text-[#333]">
				Admin
			</div> 
			<div>
				<Users users={users}/>
			</div>
		</div>
	)
}
export default AdminDashboard
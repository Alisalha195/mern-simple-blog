
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
	const{actionType,showActionSuccessMsg}=useSelector(state=>state.successMsg);

	const [successMsg , setSuccessMsg] = useState("");
	const [showSuccessMsg , setShowSuccessMsg] = useState(false); 

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading; 
	const setLoading = loadingProps.setLoading;

	useEffect(()=> {
		dispatch(getAllUsers())
	},[dispatch, successMsg, showActionSuccessMsg]);

	useEffect(()=>{

		if(successMsg && showActionSuccessMsg) {
			setTimeout(()=>{
				dispatch(setShowActionSuccessMsg(false))
				setSuccessMsg('');
				dispatch(setActionType(""))
			},4000);
		} 

	},[successMsg,actionType,showActionSuccessMsg])

	useEffect(()=>{
		if(actionType == "add")
			setSuccessMsg("added successfuly");
		else if(actionType == "edit")
			setSuccessMsg("edited successfuly");
		else if(actionType == "delete")
			setSuccessMsg("deleted successfuly");
	},[actionType])

	if(loading) {
		return <Loading />
	}
	return (
		<div> 
			{/* Success Box */}
			{
				showActionSuccessMsg && 
				<div className="[position:absolute] [top:15px] [left:300px] bg-[#068132] [width:50%] p-1 rounded text-white">
					<div className="text-center">
						{successMsg} 
					</div>
				</div>
			}
			
			<div className="flex flex-row justify-center mt-4 mb-3 text-[44px] font-bold text-[#333]">
				Admin
			</div> 
			<div>
				<div className="flex flex-row ml-4 mb-4 text-[#555]">
			    	<span className="[border-bottom:2px_solid_#666] pr-3">
			    		Users
			    	</span>
			    	<span className="text-[#999]">search</span>
			    </div>
				<Users users={users}/>
			</div>
		</div>
	)
}
export default AdminDashboard
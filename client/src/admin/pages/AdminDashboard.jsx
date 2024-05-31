
import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {getAllUsers , setUsers } from "../../redux/UserSlice.js";
import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";

import Users from "./users/Users";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IoMdClose } from "react-icons/io";

const AdminDashboard = () => {

	const dispatch = useDispatch();
	const {users} = useSelector(state=>state.user);
	
	const [localUsers , setLocalUsers] = useState([]);
	const {actionType,showActionSuccessMsg}=useSelector(state=>state.successMsg);

	const [successMsg , setSuccessMsg] = useState("");
	const [showSuccessMsg , setShowSuccessMsg] = useState(false); 
	const [searchText , setSearchText]  = useState("");

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading; 
	const setLoading = loadingProps.setLoading;

	useEffect(()=> {
		dispatch(getAllUsers());
		
	},[dispatch, successMsg, showActionSuccessMsg]);

	useEffect(()=> {
		if(users)
			setLocalUsers(users)
	}, [users])
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
	},[actionType]);

	useEffect(()=>{
		if(users) {
			let usersList =  users;
			setLocalUsers(usersList.filter(user => (user.username.indexOf(searchText) > -1 || user.firstname.indexOf(searchText) > -1 || user.lastname.indexOf(searchText) > -1 )      ))

			// users &&
			// 
			// 	dispatch(setUsers(users.filter( user => (user.username.indexOf(searchText) > -1))))

			console.log('users ::',users);
			console.log('local users ::',localUsers)
		}
	},[searchText])



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
				<div className="flex flex-col ml-4 mb-4 text-[#555]">
			    	<div className="flex flex-col text-[34px] pr-3">
			    		Users
			    	</div>
			    	<div className="flex flex-col ml-3   justify-center">
						<div className=" p-[1px] [border-bottom:1px_solid_#555] 
						                xs:[width:94%] md:[width:90%] lg:[width:80%]  flex "
						     >

							<input id="#serachInput" className="serachInput leading-7 pl-2 py-1  focus:text-gray-900 text-gray-600 [width:100%]  [border-right-width:0] [outline:none]
							     [border-radius:10px_0_0_10px] "  
							        
							       type="text"
							       value={searchText}
							       onChange={(e) =>setSearchText(e.target.value)}
					        />

							<span className={(searchText.length > 0) ? "hidden" :" pr-1 pl-2 bg-white text-[26px] text-gray-700 flex flex-col justify-center [border-radius:0_10px_10px_0]    [border-left-width:0] "}
									>

								<SearchOutlinedIcon />
							</span>
							
							<span className={(searchText.length > 0) ? "btn pr-1 pl-2 bg-white text-[36px] text-gray-700 flex flex-col justify-center [border-radius:0_10px_10px_0]    [border-left-width:0] " : "hidden"}

							onClick={() =>setSearchText("")}
							>  
								<IoMdClose />
							</span>
				
						</div>
					</div>
			    </div>
				<Users users={localUsers}/>
			</div>
		</div>
	)
}
export default AdminDashboard
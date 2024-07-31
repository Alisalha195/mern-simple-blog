

import {useEffect , useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch,useSelector} from 'react-redux';

import { setActionType, setShowActionSuccessMsg} from "../../../redux/SuccessMsgSlice.js";
import { updateUser, getUser} from "../../../redux/UserSlice.js";
import { updateAuth} from "../../../redux/AuthSlice.js";
// import {getUser, checkFileImage} from "../../redux/UserSlice.js";

import { IoMdClose } from "react-icons/io";

const EditProfileBox = ({admin ,user  ,openEditBox ,setOpenEditBox}) => {  
	
	const dispatch = useDispatch()
	const [waiting , setWaiting]  = useState(false);
	const userIsAdmin = user?.isAdmin;
	console.log('userIsAdmin',userIsAdmin)
	const [formData , setFormData] = useState(user);
	const previousPassword = user?.password  ;
	console.log('old password ', previousPassword)
	const [profileImage , setProfileImage] = useState("");

	// const {user} = useSelector(state => state.user) ;

	const editUserUrl = "http://localhost:5000/api/users/update"

	const handleChange = (e)=> {

		if(e.target.id == "isAdmin") {
			
			if(!formData.isAdmin) {

				setFormData({
					...formData , 
					[e.target.id] : true
				});
			}
			else if(!userIsAdmin) {
				setFormData({
					...formData , 
					[e.target.id] : false
				});
			}
		} else {
			setFormData({
				...formData , 
				[e.target.id] : e.target.value
			});
		}
		
		console.log(formData)
	}

	const handleImageChange = (e) => {
		setProfileImage(e.target.files[0])
	}

	const handleUpdateClick = async() => {
		
		setWaiting(true);
		

		try {
			
			// formData.map(item)
			let updatedFormData = new FormData();
			let passwordStatus = ""

			if(formData.password == previousPassword) {
				passwordStatus = "same"
				console.log('passwordStatus = same')
			} else if(formData.password == null || formData.password == undefined) {
				passwordStatus = "empty"
				console.log('passwordStatus = empty')
			}
	
			Object.keys(formData).forEach(key => {
				updatedFormData.append(key,formData[key])
			});
			
			// if(profileImage)
			// 	updatedFormData.append("image",profileImage);

			updatedFormData.append("passwordStatus",passwordStatus);
			
			console.log("form data before updating is : ",formData)
			dispatch(updateUser(updatedFormData));
			setTimeout(()=>{
				// setEditingUser(true)
				dispatch(setShowActionSuccessMsg(true));
			},2000);

			setTimeout(()=>{
				setOpenEditBox(false);
				setWaiting(false);
			},2500);
		}catch(error) {
			setWaiting(false)
			console.log("error in update profile :");
		}
	}


	return (
 
		<div className={openEditBox ? "  flex flex-row justify-center  bg-[#1e343d]/[.89]  [height:100vh] [width:100vw]   [position:fixed] [top:0] [left:0] [z-index:200] " : "hidden"}

		>

			<div className={openEditBox ? " flex flex-col justify-center bg-[#1e343d] p-1  xs:[width:70vw] md:[width:80vw] lg:[width:90vw] xl:[width:90vw]   [position:fixed] [top:10px]  [z-index:200] [border:2px_solid_#aaa] [border-radius:10px]"
	            : "hidden" }
              
	     	  >
				

				<div className="flex flex-col justify-center xs:px-4 lg:px-3 pt-2 mb-5  mt-5" >


					{/* username */}
					<div className="flex flex-col">
						<div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-100">
						  username
						</div>
						<div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600  xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="text" 
						      id={openEditBox ? "username" :`username-${user._id}`}
						      value={formData.username}
						      onChange = {handleChange}
						      
						              />

						</div>
					</div>

					
	              
					

					<div className="flex flex-row mt-2">
		              	<div className={formData.isAdmin ?"btn bg-[#017c06] px-2 [border-radius:5px] text-[#eee]" : "bg-[#78d594] px-2 [border-radius:5px] text-[#444] btn " }
							id={openEditBox ? "isAdmin" :`admin-${user._id}`}
							onClick={handleChange}

		              	>
		              		{formData.isAdmin ? "switch to user" : "switch to admin"}


		              	</div>

		              	
					</div>

	                {/* Error Box */}
	              

	                <div className="flex flex-row justify-center text-white mt-4 ">

						<button className={waiting ? " [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#04aedc]" 

						    :"btn [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#1b61d1]"}
							onClick={handleUpdateClick}
							disabled={waiting ? waiting  :false}
						>
							{waiting ? "updating.." :'save'}
						</button>

				    </div>
	              
	              
	            </div>






				<div className=" btn text-white [position:fixed]  xs:[top:15px]  md:[top:20px] text-[40px] xs:text-[30px] "
				     onClick={() => setOpenEditBox(false)}
				    >
					<span>
						<IoMdClose />
					</span>
				</div>
			</div>	
		</div>

	)
}
export default EditProfileBox
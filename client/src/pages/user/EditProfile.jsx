
import {useEffect , useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate ,useParams} from 'react-router-dom';

// import { setActionType, setShowActionSuccessMsg} from "../../../redux/SuccessMsgSlice.js";
import { updateUser, getUser} from "../../redux/UserSlice.js";

import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
// import { updateAuth} from "../../redux/AuthSlice.js";
// import {getUser, checkFileImage} from "../../redux/UserSlice.js";

import { IoMdClose } from "react-icons/io";

const EditProfileBox = ({admin   ,openEditBox ,setOpenEditBox, setEditingUser}) => {  

	const navigate = useNavigate();
	const dispatch = useDispatch();
    const params = useParams();
	
	const {user, isUpdating} = useSelector(state => state.user) ;
	const {currentUser, isSuccess} = useSelector(state => state.auth) ;

	// console.log("user : ",user)
	// console.log("currentUser : ",currentUser)

	// console.log("params.id : ",params.id)
	// console.log(params.id == "undefined")

	useEffect(()=>{
		if(!user._id == currentUser.id) {
			navigate("/notfound");
			return
		}
	},[currentUser.id])

	useEffect(()=>{
		if(!params.id || params.id == "undefined") {
			navigate("/notfound");
			return
		}
	},[params.id])
	    
    if(!params.id || params.id == "undefined" || !user._id == currentUser.id) {
		console.log("removed out ...")
		return
	}

    console.log("not out yet")  
	
	

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading; 
	const setLoading = loadingProps.setLoading;

	const [waiting , setWaiting]  = useState(false);
	
	const [formData , setFormData] = useState(user);
	const previousPassword = user?.password || "" ;
	// console.log('old password ', previousPassword)
	const [profileImage , setProfileImage] = useState("");

	// const {user} = useSelector(state => state.user) ;

	const editUserUrl = "http://localhost:5000/api/users/update"
	
	// const getBreifText = (text , cutPoint) => {
	// 	return (`${text.substring(0,cutPoint)}...`);
	// } ;

	const handleChange = (e)=> {
		setFormData({
			...formData , 
			[e.target.id] : e.target.value
		});
		console.log(formData)
	}

	const handleImageChange = (e) => {
		setProfileImage(e.target.files[0])
	}

	const handleUpdateClick = async() => {
		// console.log('clicked!');
		setWaiting(true);
		try {
			
			// formData.map(item)
			let updatedFormData = new FormData();
			let passwordStatus = ""

			if(formData.password == previousPassword) {
				passwordStatus = "same"
			} else if(formData.password == null) {
				passwordStatus = "empty"
			}
	
			Object.keys(formData).forEach(key => {
				updatedFormData.append(key,formData[key])
			});
			
			if(profileImage)
				updatedFormData.append("image",profileImage);

			updatedFormData.append("passwordStatus",passwordStatus);
			
			dispatch(updateUser(updatedFormData));
			// setTimeout(()=>{
			// 	setEditingUser(true)
			// 	// dispatch(setShowActionSuccessMsg(true));
			// },2000);

			// dispatch(updateAuth({...formData,image:}))
			// dispatch(getUser(updatedFormData._id))
			

			setTimeout(()=>{
				
				setWaiting(false);
				navigate(`/profile/${user._id}`);
			},1000);

		}catch(error) {
			setWaiting(false)
			console.log("error in update profile :");
		}
	}

// bg-[#1e343d]
	if(loading){
		return <Loading />
	}
	return (
 
		<div className="  flex flex-col xs:justify-center md:justify-between bg-[#ccc] xs:p-1 md:p-2 xs:mb-[40px] md:mb-[30px] "
		>

				<div className="text-[40px] text-[#555] pl-3 mb-2">
					Edit {user?.firstname}`s profile
				</div>

	                {/* row group  */}
					<div className="flex md:flex-row xs:flex-col  justify-between  xs:[width:100%]">

						<div className="flex flex-col xs:[width:100%] md:[max-width:35%]">
						  <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-900">
						    first name
						  </div>
						  <div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 [width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="text" 
						      id={"firstname"}
						      value={formData.firstname }
						      onChange = {handleChange}
						      
						              />

						  </div>
						</div>

						<div className="flex flex-col xs:[width:100%] md:[max-width:35%]">
						  <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-900">
						    last name
						  </div>
						  <div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:100%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="text"
						      id={"lastname"}
						      value={formData.lastname }
						      onChange = {handleChange}
						      
						              />

						  </div>
						</div>
						<div className="flex flex-col xs:[width:100%] md:[max-width:10%]">
							<div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-900">
						    age
						  </div>
						  <div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:100%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="number" 
						      id={"age"}
						      value={formData.age }
						      onChange = {handleChange}
						      
						              />

						  </div>
						</div>
					</div>

					{/* row group  */}
					<div className="flex  xmd:flex-row xs:flex-col  justify-between  xs:[width:100%] xmd:mt-1">
						{/* username */}
						<div className="flex flex-col xs:[width:100%]  xs:mt-1 xmd:[max-width:45%] md:mt-[0]">
							<div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-900">
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

						{/* password */}
						<div className="flex flex-col xs:[width:100%] xmd:[max-width:45%] xs:mt-1 md:mt-[0]">
							<div className="  leading-7 text-gray-900 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
							  password
							</div>
							<div className="basis-8/12">
							  <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600  xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
							  required
							  type="password"
							  id={openEditBox ? "password" :`password-${user._id}`}
							  onChange = {handleChange} 
							       />

							</div>
						</div>
						
					</div>

					{/* job title */}
						<div className="flex flex-col xs:[width:100%]  xs:mt-1 md:mt-[0]">
							<div className="  leading-7 text-gray-900 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
							  job title
							</div>
							<div className="basis-8/12">
							  <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600  xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
							  required
							  type="text"
							  id={"jobTitle"}
							  value={formData.jobTitle}
							  onChange = {handleChange} 
							       />

							</div>
						</div>
					{/* breif information */}
					<div className="flex flex-col mt-2">
						<div className="  leading-7 text-gray-900 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
						  breif information
						</div>
						<textarea placeholder="text" wrap="off" 
						id="breifInfo"
					    className="xs:p-2 lg:p-3 xs:text-[26px] lg:text-[31px] text-gray-600 [outline:none] [resize:none]
					               [border:1px_solid_#ddd] [width:100%] [height:100%] " 
		                value={formData.breifInfo}
		                onChange={handleChange}
						>
						</textarea>
					</div>

					{/* image */}
					<div className="flex flex-col">
						<div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-900">
						  profile image
						</div>
						<div className="">
						    <input className=" pl-2 py-1  focus:text-gray-900 text-gray-600   text-[24px]  [outline:none] [border-radius:7px]" 
						      type="file" 
						      // id={openEditBox ? "username" :`username-${user._id}`}
						      name="image"
						      onChange = {handleImageChange}
						      
						              />

						</div>
					</div>
	              

	                {/* Error Box */}
	              

	                <div className="flex flex-row justify-center text-[#fff] mt-4 ">

						<button className={waiting ? " [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#04aedc]" 

						    :"btn [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#1b61d1]"}
							onClick={handleUpdateClick}
							disabled={waiting ? waiting  :false}
						>
							{waiting ? "updating.." :'save'}
						</button>
				    </div>
	            </div>
			

	)
}
export default EditProfileBox


import {useEffect , useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch,useSelector} from 'react-redux';

import { setActionType, setShowActionSuccessMsg} from "../../../redux/SuccessMsgSlice.js";
import { updateUser} from "../../../redux/UserSlice.js";

import { IoMdClose } from "react-icons/io";

const EditProfileBox = ({user,openEditBox ,setOpenEditBox}) => {  
	
	const dispatch = useDispatch()
	const [waiting , setWaiting]  = useState(false);
	
	const [formData , setFormData] = useState(user);

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

	const handleUpdateClick = async() => {
		console.log('clicked!');

		setWaiting(true);
		

		try {
			
			// const res = await fetch(`${editUserUrl}/${user._id}`,{
			// 	method:"PUT"
			// 	
			// });
			// const response = await res.json()
			// console.log('response in update profile',response)
			
			// handleOpenDeleteBox();

			dispatch(updateUser(formData));
			
			dispatch(setShowActionSuccessMsg(true));

			setTimeout(()=>{
				setOpenEditBox(false);
				setWaiting(false);
			},1500);
		}catch(error) {
			setWaiting(false)
			console.log("error in update profile :");
		}
	}


	return (
 
		<div className={openEditBox ? "  flex flex-row justify-center  bg-[#1e343d]/[.89]  [height:100vh] [width:100vw]   [position:fixed] [top:0] [left:0]" : "hidden"}

		>

			<div className={openEditBox ? " flex flex-col justify-center bg-[#1e343d] p-1  xs:[width:70vw] md:[width:80vw] lg:[width:90vw] xl:[width:90vw]   [position:fixed] [top:10px]  [z-index:200] [border:2px_solid_#aaa] [border-radius:10px]"
	            : "hidden" }
              
	     	  >
				

				<div className="flex flex-col justify-center xs:px-4 lg:px-3 pt-2 mb-5  mt-5" >

	                {/* fullname  */}
					<div className="flex md:flex-row xs:flex-col  justify-between  xs:[width:100%]">
						<div className="flex flex-col xs:[width:100%] md:[max-width:35%]">
						  <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-100">
						    first name
						  </div>
						  <div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 [width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="text" 
						      id="firstname"
						      value={formData.firstname }
						      onChange = {handleChange}
						      
						              />

						  </div>
						</div>

						<div className="flex flex-col xs:[width:100%] md:[max-width:35%]">
						  <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-100">
						    last name
						  </div>
						  <div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:100%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="text" 
						      id="lastname"
						      value={formData.lastname }
						      onChange = {handleChange}
						      
						              />

						  </div>
						</div>
						<div className="flex flex-col xs:[width:100%] md:[max-width:10%]">
							<div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-100">
						    age
						  </div>
						  <div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:100%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="number" 
						      id="age"
						      value={formData.age }
						      onChange = {handleChange}
						      
						              />

						  </div>
						</div>
					</div>

					{/* username */}
					<div className="flex flex-col">
						<div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-100">
						  username
						</div>
						<div className="">
						    <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600  xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]"
						      required 
						      type="text" 
						      id="username"
						      value={formData.username}
						      onChange = {handleChange}
						      
						              />

						</div>
					</div>

					{/* password */}
					<div className="flex flex-col mt-2">
						<div className="  leading-7 text-gray-100 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
						  password
						</div>
						<div className="basis-8/12">
						  <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600  xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
						  required
						  type="password"
						  id="password"
						  onChange = {handleChange} 
						       />

						</div>
					</div>
					{/* job title */}
					<div className="flex flex-col mt-2">
						<div className="  leading-7 text-gray-100 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
						  job title
						</div>
						<div className="basis-8/12">
						  <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600  xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
						  required
						  type="text"
						  id="jobTitle"
						  value={formData.jobTitle}
						  onChange = {handleChange} 
						       />

						</div>
					</div>

					{/* breif information */}
					<div className="flex flex-col mt-2">
						<div className="  leading-7 text-gray-100 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
						  breif information
						</div>
						<textarea placeholder="text" wrap="off" id="breifInfo"
					    className="xs:p-2 lg:p-3 xs:text-[26px] lg:text-[31px] text-gray-600 [outline:none] [resize:none]
					               [border:1px_solid_#ddd] [width:100%] [height:100%] " 
		                value={formData.breifInfo}
		                onChange={handleChange}
						>
						</textarea>
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
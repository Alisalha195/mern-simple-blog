
import {useEffect , useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom' 
import UserProfileImage from "../../user/UserProfileImage"
import EditProfileBox from "../../user/profile/EditProfileBox"
import {setActionType} from "../../../redux/SuccessMsgSlice.js";

const AboutBox = ({currentUser, user, setEditingUser}) => {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	// console.log('user : ',user._id)
	// console.log('currentUser in About : ',currentUser)
	// console.log('user in About : ',user)
	const [openEditBox, setOpenEditBox] = useState(false);

	const breifInfo = "senior software engineer at Google , 3 years experience in web development and design , father of two children and loved husband"

	
	return (
		<div className={openEditBox ? " no-doc-scroll flex md:flex-row xs:flex-col xs:flex-wrap sm:flex-nowrap mt-3 p-3 border-2 border-b-gray-300	" 
		    : " flex md:flex-row xs:flex-col xs:flex-wrap sm:flex-nowrap mt-3 p-3 border-2 border-b-gray-300	" }
		    >

			{/* profile image */}
			<div className="md:basis-5/12 lg:basis-4/12  flex justify-center">
				<div className="xs:hidden xl:flex">
					<UserProfileImage size={350}  
							userId={currentUser.id == user._id ? currentUser.id : user._id} 
							userImage={currentUser.id == user._id ? user.image : user.image}
					/>
				</div>
				<div className="xs:hidden lg:flex xl:hidden">
					<UserProfileImage size={300} 
							userId={currentUser.id == user._id ? currentUser.id : user._id} 
							userImage={currentUser.id == user._id ? user.image : user.image}
					/>
				</div>
				<div className="xs:hidden md:flex lg:hidden">
					<UserProfileImage size={250} 
							userId={currentUser.id == user._id ? currentUser.id : user._id}
							userImage={currentUser.id == user._id ? user.image : user.image}
					 />
				</div>
				<div className="xs:hidden sm:flex md:hidden">
					<UserProfileImage size={200}  rounded={true}
							userId={currentUser.id == user._id ? currentUser.id : user._id}
							userImage={currentUser.id == user._id ? user.image : user.image} 
					/>
				</div>
				<div className="xs:flex sm:hidden">
					<UserProfileImage size={"full"} 
							userId={currentUser.id == user._id ? currentUser.id : user._id}  
							userImage={currentUser.id == user._id ? user.image : user.image}
					/>
				</div>
			</div>

			{/* basic info */}
			<div className="leading-7 mt-3 md:basis-7/12   lg:basis-8/12">

				<div className="font-bold text-gray-800 xs:text-center  
				                md:text-left tracking-tight
								xs:text-[40px] sm:text-[50px] md:text-[54px] lg:text-[65px]
				  ">
					{user ? `${user.firstname} ${user.lastname}` : "User"}
				</div>

				<div className="pl-2 xs:mt-2 sm:mt-4 text-gray-700 xs:text-center md:text-left">
					<div className=" tracking-tight xs:text-[24px] sm:text-[27px] md:text-[30px] ">
					{user ? user.jobTitle ? user.jobTitle  : "" : ""}
						
						<span className="text-xs ml-2 xs:hidden md:inline">
						{user ? user.age ? `${user.age}y` : "" : ""}
						
						</span>
					</div>
					<div className="text-sm text-gray-600 tracking-tight xs:text-[21px] sm:text-[23px] md:text-[25px]">
						{user ?user.email : ""}
					</div>
					<div className="xs:text-justify md:text-left xs:text-[26px] sm:text-[27px] 
					               md:text-[32px] mt-2  tracking-tight xs:px-4 sm:px-5 md:pl-1 md:pr-6">
						  {user ? user.breifInfo : "no info"}
					</div>
					<div className="text-sm  tracking-tight">
						
					</div>
				</div>
				<div className={(currentUser ? currentUser.id == user._id : false) ? "flex flex-row justify-end" : "hidden"}>
					<button className="btn flex flex-col xs:justify-center px-2  [border:1px_solid_#888] xs:text-[22px] xm:text-[24px] lg:text-[28px] text-[#fff] bg-[#00872b] [border-radius:8px]"
						
						// onClick={()=>{setOpenEditBox(true); dispatch(setActionType('edit'));}}
						onClick={()=>{navigate(`/profile/edit/${user?._id}`)}}
					>
						edit
					</button>
				</div>
			</div>

			{/* <EditProfileBox user={user} openEditBox={openEditBox} setOpenEditBox={setOpenEditBox} setEditingUser={setEditingUser}/> */}
		</div>	
	)
}
export default AboutBox


import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';

import useDeleteBox from '../../../hooks/useDeleteBox';
import DeleteUserBox from './DeleteUserBox';

import UserProfileImage from "../../../components/user/UserProfileImage"
import EditProfileBox from "../../../components/user/profile/EditProfileBox"

import { setActionType } from "../../../redux/SuccessMsgSlice.js";

// import Loading from "../../components/public/Loading";
// import LoadingBox from "../../hooks/useLoading"
// import {getUserArticles } from "../../redux/ArticleSlice.js";
// import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";




const UserCard = ({user}) => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [openEditBox, setOpenEditBox] = useState(false);
    // const {currentUser} = useSelector(state => state.auth) ;

	const DeleteBoxProps = useDeleteBox()
	const openDeleteBox = DeleteBoxProps.open;
	const handleOpenDeleteBox = DeleteBoxProps.handleOpenDeleteBox
	
	return (
		<div className={openDeleteBox || openEditBox ? "no-doc-scroll bg-[#eee] mb-4 [border-bottom:1px_solid_#bbb] [border-left:1px_solid_#ccc]" : "bg-[#eee] mb-4 [border-bottom:1px_solid_#bbb] [border-left:1px_solid_#ccc]"}> 

			 <div className="flex xs:flex-col sm:flex-row ">
			 
			    {/*...left Box....*/}
		      <div className="flex xs:flex-col sm:flex-row xs:justify-center sm:justify-start xs:py-[10px] sm:py-[4px] xs:basis-8/12 sm:basis-9/12">
			      
			      	  <div className="flex xs:flex-row justify-center sm:flex-col sm:ml-2 sm:mr-2 ">
				      	<UserProfileImage size={"lg"} rounded={true} userId={user?._id} userImage={user.image}/>
				      </div>
				      <div className="flex xs:flex-col xs:[margin:auto] sm:[margin:0]   justify-center ">
				      	
				      		<span className="btn text-[#222] hover:text-[#07508c] xs:text-[28px] sm:text-[32px]"
								onClick={()=>navigate(`/profile/${user._id}`)}
				      		>
					      		{user.username}
				      		</span>
					      	<span className="flex xs:justify-center sm:justify-start text-[#444] xs:text-[23px] sm:text-[25px]">
						      	{user.email}
					      	</span>
				      	
				      </div>
			      
		      </div>
		      
		      {/*...Control Buttons....*/}
		      <div className="py-2 flex xs:flex-row sm:flex-col  xs:basis-4/12 sm:basis-3/12 justify-center xs:text-[22px] sm:text-[25px] md:text-[28px]">
		          <div className="flex xs:flex-col sm:flex-row  justify-center mr-[18px] ">
		            <span className="btn px-[8px] sm:py-[2px] [border:1px_solid_#444] [border-radius:6px] bg-[#009830] hover:bg-[#0b6f13] text-white"
						
						onClick={()=>{setOpenEditBox(true); dispatch(setActionType("edit"));}}

		            >
		              edit
		            </span>
		          </div>
		          
		          <div className="btn flex xs:flex-col sm:flex-row justify-center sm:mt-2 sm:mr-[18px] ">
		            <span className="px-[5px] sm:py-[2px] [border:1px_solid_#982304] [border-radius:6px]  text-[#982304] hover:text-white hover:[border:1px_solid_#999] hover:bg-[#f74a1c]"

						onClick={()=>{handleOpenDeleteBox('open');dispatch(setActionType("delete"));}}
		            >
		              delete
		            </span>
		          </div>
		      </div>
			 </div>

			 <DeleteUserBox userId={user._id} username={user.username} open={openDeleteBox} handleOpenDeleteBox={handleOpenDeleteBox}/>

			 <EditProfileBox admin={true} user={user} openEditBox={openEditBox} setOpenEditBox={setOpenEditBox} />
		</div>
	)
}
export default UserCard


import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
// import Loading from "../../components/public/Loading";
// import LoadingBox from "../../hooks/useLoading"
// import {getUserArticles } from "../../redux/ArticleSlice.js";
// import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";




const UserCard = ({user}) => {

	
	return (
		<div className="bg-red-300 mb-2"> 
			 <div className="flex flex-row">
			 
			    {/*...left Box....*/}
		      <div className="flex flex-col basis-8/12">
		      </div>
		      
		      {/*...Control Buttons....*/}
		      <div className="flex flex-col basis-4/12 justify-right">
		          <div className="flex flex-col justify-center">
		            <span className="px-[5px] py-[2px] [border:1px_solid_#444] bg-[#006600]">
		              edit
		            </span>
		          </div>
		          
		          <div>
		            <span>
		              delete
		            </span>
		          </div>
		      </div>
			 </div>
		</div>
	)
}
export default UserCard
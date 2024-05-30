

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
		<div className="bg-[#eee] mb-2 [border-bottom:1px_solid_#bbb] [border-left:1px_solid_#ccc]"> 
			 <div className="flex xs:flex-col sm:flex-row ">
			 
			    {/*...left Box....*/}
		      <div className="flex xs:flex-col sm:flex-row xs:justify-center sm:justify-start xs:py-[10px] sm:py-[4px] xs:basis-8/12 sm:basis-9/12">
			      
			      	  <div className="flex xs:flex-row justify-center sm:flex-col ">
				      	img
				      </div>
				      <div className="flex xs:flex-row justify-center sm:flex-col">
				      	info
				      </div>
			      
		      </div>
		      
		      {/*...Control Buttons....*/}
		      <div className="py-2 flex xs:flex-row sm:flex-col bg-[#444] xs:basis-4/12 sm:basis-3/12 justify-center xs:text-[22px] sm:text-[25px] md:text-[28px]">
		          <div className="flex xs:flex-col sm:flex-row  justify-center mr-[18px] ">
		            <span className="btn px-[8px] sm:py-[2px] [border:1px_solid_#444] [border-radius:6px] bg-[#009830] hover:bg-[#0b6f13] text-white">
		              edit
		            </span>
		          </div>
		          
		          <div className="btn flex xs:flex-col sm:flex-row justify-center sm:mt-2 mr-[18px] ">
		            <span className="px-[5px] sm:py-[2px] [border:1px_solid_#982304] [border-radius:6px]  text-[#982304] hover:text-white hover:[border:1px_solid_#999] hover:bg-[#f74a1c]">
		              delete
		            </span>
		          </div>
		      </div>
			 </div>
		</div>
	)
}
export default UserCard
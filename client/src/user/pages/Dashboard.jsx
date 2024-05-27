

import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {getUserArticles } from "../../redux/ArticleSlice.js";
import {setActionType, setShowActionSuccessMsg} from "../../redux/SuccessMsgSlice.js";

import UserArticles from "../../components/user/profile/UserArticles";

const Dashboard = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingProps = LoadingBox();
  const loading = loadingProps.loading;

  const [successMsg , setSuccessMsg] = useState("");
	const [showSuccessMsg , setShowSuccessMsg] = useState(false); 
  
  const{currentUser,error}=useSelector(state=>state.auth);
  // console.log("auth in dash is :",currentUser)
  const {articles, isLoading } = useSelector(state => state.article);

  const{actionType,showActionSuccessMsg}=useSelector(state=>state.successMsg);
  
  useEffect(()=>{
  	// console.log('Auth is dash is :',currentUser)
    if(!currentUser)
      navigate("/login")
      
    dispatch(getUserArticles(currentUser.id))
  },[currentUser,error,dispatch,navigate, successMsg, showActionSuccessMsg])
  // currentUser,error,dispatch,navigate
  
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

  // const navigateTo = (link) => {
  //   return (<Navigate to={link} />)
  // } 

  if (loading) {
    return <Loading />
  }
  
	return (
	  <div className="">

		  {/* Success Box */}
			{
				showActionSuccessMsg && 
				<div className="[position:absolute] [top:15px] [left:300px] bg-[#068132] [width:50%] p-1 rounded text-white">
					<div className="text-center">
						{successMsg} 
					</div>
				</div>
			}
			

	  	<div className="mt-3 flex flex-row justify-center">
		  	<div className="text-[#444] xs:text-[36px] sm:text-[40px] lg:text-[46px] font-bold">
		  		{currentUser ? `${currentUser.firstname} Dashboard` : "Dashboard"}
		  	</div>
	  	</div>

	  	<div>
	    {
	      articles 
	      ?
	          <div className="py-5 mb-5">
				<div className="mt-3 ml-4 flex flex-row justify-start ">
					
						<span className="pr-5 [border-bottom:1px_solid_#888] text-[#444] xs:text-[33px] xm:text-[38px] lg:text-[43px]">
							Articles
						</span>
				</div>
				<div className="flex flex-row justify-start mt-4 mr-5 ">
					<span className="btn flex flex-col ml-4 xs:justify-center px-2  [border:1px_solid_#888] xs:text-[25px] xm:text-[28px] lg:text-[30px] text-[#fff] bg-[#00872b] [border-radius:8px]" 

						onClick={()=>{navigate("/articles/add"); dispatch(setActionType("add"));}}
					>
						add
					</span>
				</div>
	          	<UserArticles articles={articles} />
	          </div>
	          
          : 
	          <div className="flex flex-row justify-start ml-3 mt-4 mr-5"> 
							<span>No Articles Available</span>
							<span className="btn flex flex-col ml-4 xs:justify-center px-2  [border:1px_solid_#888] xs:text-[25px] xm:text-[28px] lg:text-[30px] text-[#fff] bg-[#00872b] [border-radius:8px]" 

								onClick={()=>{navigate("/articles/add"); dispatch(setActionType("add"));}}
							>
								add
							</span>
	          </div>
	    }
	    
		</div>
	  </div>
		
	)
}

export default Dashboard
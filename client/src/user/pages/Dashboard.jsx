

import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {getUserArticles} from "../../redux/ArticleSlice.js";

import UserArticles from "../../components/user/profile/UserArticles";

const Dashboard = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingProps = LoadingBox();
  const loading = loadingProps.loading;
  
  
  const{currentUser,error}=useSelector(state=>state.user);
  const {articles, isLoading} = useSelector(state => state.article);
  
  useEffect(()=>{
    if(!currentUser)
      navigate("/login")
      
    dispatch(getUserArticles(currentUser.id))
      
      console.log("Articles in dashborad :",articles)
  },[currentUser])
  
  const navigateTo = (link) => {
    return (<Navigate to={link} />)
  } 

  if (loading) {
    return <Loading />
  }
  
	return (
	  <div>
	  	<div className="mt-3 flex flex-row justify-center">
		  	<div className="text-[#444] xs:text-[36px] sm:text-[40px] lg:text-[46px] font-bold">
		  		Dashboard
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

						onClick={()=>navigate("/articles/add")}
					>
						add
					</span>
				</div>
	          	<UserArticles articles={articles} />
	          </div>
	          
          : 
	          <div> No Articles Available</div>
	    }
	    
		</div>
	  </div>
		
	)
}

export default Dashboard
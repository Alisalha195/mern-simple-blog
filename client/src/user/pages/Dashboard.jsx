

import {useState , useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {getUserArticles} from "../../redux/ArticleSlice.js";

import UserArticles from "../../components/user/profile/UserArticles";

const Dashboard = () => {
  
  const loadingProps = LoadingBox();
  const loading = loadingProps.loading;
  
  const navigate = useNavigate();
  
  const{currentUser,error}=useSelector(state=>state.user);
  const {articles, error,isLoading, total} = useSelector(state => state.article);
  
  useEffect(()=>{
    if(!currentUser)
      navigate("/login")
      
    dispatch(getUserArticles(currentUser._id))
      
  },[currentUser])
  
  if (loading) {
    return <Loading />
  }
  
	return (
	  <div>
	    {
	      articles ?
          <UserArticles articles={articles} />
          : <div> No Articles Available</div>
	    }
	  </div>
		
	)
}

export default Dashboard
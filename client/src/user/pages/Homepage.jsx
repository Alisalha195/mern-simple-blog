
import useReducer,{useEffect} from "react";
import { NavLink, useNavigate } from 'react-router-dom';;
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import HeroSection from "../../components/homepage/HeroSection"
import LatestArticles from "../../components/homepage/LatestArticles"
import ArticleSearchBox from "../../components/homepage/ArticleSearchBox"
import TagsBox from "../../components/homepage/TagsBox"
import {useDispatch,useSelector} from 'react-redux';
import {logoutAsync, reset} from "../../redux/UserSlice.js";
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"

const Homepage = () => {

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading;

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {currentUser, error, isLoading, isSuccess} = useSelector(state => state.user) ;

	useEffect(()=>{
		if(!currentUser) {
			navigate("/login")
		}
		
	},[]);

	if(loading) {
		return <Loading />
	}
	return (
		<div className="overscroll-none">
			
			<HeroSection />
			
			{/* <LatestArticles /> */}
			<hr />
			
			<div className="mb-9" style={{width:"90%"}}>
				<TagsBox inBottom={true} />
			</div>
			
			{/* <div style={{height:"700px", backgroundColor:"#0000aa"}}></div> */}
		</div>
		
	)
}
export default Homepage;
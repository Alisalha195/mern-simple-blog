import {useEffect} from "react"
import ArticleCard from "../../../components/public/ArticleCard"
import ArticleFilterBox from "../../../components/articles/ArticleFilterBox"
import UserArticles from "../../../components/user/profile/UserArticles"

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import {useDispatch,useSelector} from 'react-redux';

import{getArticles} from '../../../redux/ArticleSlice'

const Articles = () => {
	
	const dispatch = useDispatch();
	const articles = useSelector((store)=> store.article.articles);
	
	const isLoading = useSelector((store)=> store.article.isLoading);
	
	//const {articles , isLoading} = useSelector((store)=> store.article);

// console.log('ARTICLES : ', articles)

  useEffect(()=>{
    dispatch(getArticles());
  },[])
	return (
	  (isLoading) 
	  ? <div className="text-[50px] text-center text-[#bbb]">Loading...</div>
	  :
		<div className="mb-[130px]">
			
			<ArticleFilterBox />

			<UserArticles articles={articles}/>
			
			<div className=" text-center mt-3 text-gray-700 xs:text-[24px] md:text-[28px] lg:text-[31px] " >
				<span className="btn px-2 py-1">
					more
					<KeyboardArrowDownOutlinedIcon />
				</span>
			</div>
		</div>
	)
}

export default Articles
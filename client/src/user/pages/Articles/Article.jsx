import {useState , useEffect} from 'react';
import { useParams } from 'react-router';
import {useDispatch,useSelector} from 'react-redux';
// import {getArticle } from  '../../../redux/ArticleSlice'

// import { getArticles} from  '../../../redux/ArticleSlice'

import LoadingBox from '../../../hooks/useLoading'
import Loading from '../../../components/public/Loading'

import Image from '../../../assets/images/backgroundhero.jpg';

import ArticleSidebar from '../../../components/articles/ArticleSidebar'
import WriterBrief from '../../../components/articles/WriterBrief'
import ArticleUpperBox from '../../../components/articles/ArticleUpperBox'
import ArticleText from '../../../components/articles/ArticleText'
import Control from '../../../components/articles/Control'
import UserProfileImage from '../../../components/user/UserProfileImage'
// import Tag from '../../../components/public/Tag'
// import ArticleCard from '../../../components/public/ArticleCard'
import UserArticles from "../../../components/user/profile/UserArticles"
import TagsBox from "../../../components/homepage/TagsBox"


const Article = () => {

    const [article,setArticle]= useState('')

	const params = useParams();
	const loadingProps = LoadingBox();
	const loading = loadingProps.loading;
	// const dispatch = useDispatch();

	// const article = useSelector((store)=> store.article.article);
	// const isLoading = useSelector((store)=> store.article.isLoading);

	// useEffect(()=>{
	// 	setArticle(getArticle(params.id))
	// },[params])
	// if(!isLoading)
	// 	console.log("articles ; :",articles);
	
	
	// let article = null;
	// if(!isLoading) {
		 
	// }
	// const loadingProps = LoadingBox()
	// const loading = loadingProps.loading;


	
	useEffect(()=>{
		const getArticle = async()=> {
			console.log(params.id)
			const response = await fetch(`/api/articles/${params.id}`).then(
				response =>  response.json()
			).then(
				data => setArticle(data)

			)
		}
		getArticle()
        console.log('the article is',article)
	},[]);

// 	useEffect(()=>{
// 		console.log('id',params.id)
// 		dispatch(getArticle(params.id));
// 
// 	},[])
	return (
		(loading) ? <Loading /> : 
		<div className="mb-[120px]">
			
			< ArticleUpperBox 
					title={article.title} 
					author={article.author}
			/>
			
			
			<div className="flex flex-row  mt-2">
				
				<div className=" md:basis-1/12 lg:basis-2/12">
					{/* < ArticleSidebar /> */}
				</div>

				
				<div className="mt-3 p-2 xs:basis-full md:basis-10/12  lg:basis-8/12">
					<ArticleText title={article.content}/>
					
					<Control 
						likes={article.likes}
						dislikes={article.dislikes}
					/>

					<WriterBrief author={article.author}/>
					
					{/* Tags */}
					<TagsBox inBottom={false}/>

					

					
				</div>

				
				<div className="md:basis-1/12 lg:basis-2/12">
					{/* right */}
				</div>

			</div>

			{/* Recommended */}
			<div className=" mt-4 sm:p-2 "
				  >
				<div className="text-gray-800 xs:ml-4 xs:text-[26px] sm:text-[28px] md:text-[30px] xmd:text-[33px]">
					Recommended
				</div>

				{/* < UserArticles /> */}

			</div>
		</div>
		
	)
}

export default Article
import {useState,useEffect, useRef} from "react"
import {useDispatch,useSelector} from 'react-redux';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IoMdClose } from "react-icons/io";

import LoadingBox from "../../../hooks/useLoading"
import useSearchBox from "../../../hooks/useSearchBox"

import ArticleCard from "../../../components/public/ArticleCard"
import ArticleFilterBox from "../../../components/articles/ArticleFilterBox"
import UserArticles from "../../../components/user/profile/UserArticles"
import Loading from "../../../components/public/Loading";
import SearchOpenBox from "../../../components/public/SearchOpenBox"
import DropDownMenu from "../../../components/layout/DropDownMenu"

import {getCategoryByTitle , getUserByUsername} from "../../../assets/helpers.js";
import{getArticles} from '../../../redux/ArticleSlice'
import { getCategories} from "../../../redux/CategorySlice.js";
import {getAllUsers  } from "../../../redux/UserSlice.js";

const Articles = () => {
	
	const dispatch = useDispatch(); 

	// .... state for categories Dropdown Box....
	const [categoryMenuValue , setCategoryMenuValue] = useState("");
	const [categoriesMenuList , setCategoriesMenuList] = useState("")

	// .... state for authors Dropdown Box....
	const [authorsMenuValue , setAuthorsMenuValue] = useState("");
	const [authorsMenuList , setAuthorsMenuList] = useState("")
	
	const [articlesToFilter , setArticlesToFilter] = useState("");
	
	// search text 
	const [searchText , setSearchText] = useState("")
	const [showSearchResults , setShowSearchResults] = useState(false)
	const [searchResults , setSearchResults] = useState("")
	

	const articles = useSelector((state)=> state.article.allArticles);
	const isLoading = useSelector((state)=> state.article.isLoading);
	const {allCategories} = useSelector(state => state.category);
	const {users} = useSelector(state=>state.user);

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading;

	const openSearchBoxProps = useSearchBox()

	const openSearchBox = openSearchBoxProps.open;
	const handleOpenSearchBox = openSearchBoxProps.handleOpenSearchBox;
	

  useEffect(()=>{
    dispatch(getArticles());
    
    
  },[]);
  useEffect(()=>{
  
    dispatch(getAllUsers());
  
    // console.log('users are :',users)
  },[])
  useEffect(()=>{
    
    dispatch(getCategories())
    // console.log('users are :',users)
  },[])

	useEffect(()=>{
		
	},[]);

	useEffect(()=>{
		if(articles) {
			setArticlesToFilter(articles);
			setSearchResults(articles);
		}
		// console.log('cahnging')
		// console.log("articlesToFilter",articlesToFilter)
	},[articles, isLoading]);

	useEffect(()=>{
		if(allCategories)
			setCategoriesMenuList([
				{_id:"1" ,title:"all categories", authorId:"0"} 

				, ...allCategories 
			]);
		// console.log("menu list is :",categoriesMenuList);
		categoriesMenuList ? 
			setCategoryMenuValue(categoriesMenuList[0]?.title) 
			: setCategoryMenuValue("");
		
		// console.log("setting categories....")
	},[allCategories,dispatch,loading]);

	useEffect(()=>{
		if(users)
			// setAuthorsMenuList(users)
			setAuthorsMenuList([
				{_id:"1" ,username:"all authors"} 

				, ...users 
			]);
		// console.log("users list are :",authorsMenuList);
		authorsMenuList 
			? setAuthorsMenuValue(authorsMenuList[0]?.username) 
			: setAuthorsMenuValue(""); 
		
		// console.log("setting users....")
	},[users,dispatch, loading]);

	useEffect(()=>{
		
		const handleFilterArticles = () => {
			setArticlesToFilter(prev => articles)
			// console.log("articlesToFilter",articlesToFilter) 

			let categoryId = getCategoryByTitle(categoriesMenuList,categoryMenuValue);
			let authorId = getUserByUsername(authorsMenuList,authorsMenuValue);
			// console.log('categoryId',categoryId)
			// console.log('authorId',authorId)

			categoryId==1 
				? 
					authorId==1 
					? setArticlesToFilter(prev => articles)
					: setArticlesToFilter(prev => prev.filter(article=>(article.authorId == authorId)))
				
				: 
					authorId==1 
					? setArticlesToFilter(prev => prev.filter(article=>(article.categoryId == categoryId)))
					: setArticlesToFilter(prev => prev.filter(article=>((article.categoryId == categoryId && article.authorId == authorId))))


				// 
		}

		if(categoriesMenuList)
			handleFilterArticles()
		// articlesToFilter.filter(article=>(article.categoryId == getCategoryByTitle(articlesToFilter,categoryMenuValue)));
		
	},[categoryMenuValue , authorsMenuValue]);

	const handleSearch = () => {
		handleOpenSearchBox("close");

		setSearchText(prev => prev.trim());
		// setSearchText(prev => prev.toLowerCase());
		setShowSearchResults(true);
		if(articles.length> 0)
			setSearchResults(articles);
		
		// console.log('articles in search :',articles )

		setSearchResults(prevResult => prevResult.filter(article => (article.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)));
		console.log('prevResult :', searchResults)
		console.log('searchText :', searchText)


	}

	// useEffect(()=>{
	// 	
	// },[searchText])

	if(loading){
		return <Loading />
	}
	return (
	  
		<div className="mb-[130px]">
			
			{/* <ArticleFilterBox /> */}
			<div className={openSearchBox ? "no-doc-scroll flex xs:flex-col justify-between  my-3 p-2 " 
		                   :"flex xs:flex-col justify-between  my-3 p-2 "}>

				{/* search icon */}
				<div className=" flex justify-end xs:[width:100%] "
				 >

					<span className=" btn pr-1 pl-2 rounded bg-white text-gray-700 flex flex-col justify-center text-[20px]  "

						onClick={()=>handleOpenSearchBox("open")}
					>
						<SearchOutlinedIcon   />
					</span>
				</div>

				<div className="flex flex-wrap xs:flex-col sm:flex-row">
					<div className="xs:text-[24px] sm:text-[28px] md:text-[32px] text-gray-700 mb-2 mr-2">
						filter by :
					</div>

					{/* Categories DropDown Box */}
					<div className="sm:ml-2 mb-2">	
						<div className=" xs:[width:190px] sm:[width:250px] " >  
							
						{
							!loading 
							&&

							<DropDownMenu 
								isStatic={true}
								menuValue={categoryMenuValue}
								setMenuValue={setCategoryMenuValue}
								menuList={categoriesMenuList}
								setMenuList={setCategoriesMenuList}
								property={"title"}
							/>
						}
						</div>
					</div>

					{/* Authors DropDown Box */}
					<div className="sm:ml-2 mb-2">
						<div className=" xs:[width:190px] sm:[width:250px] " >  

						{
							!loading 
							&&
							<DropDownMenu 
								isStatic={true}
								menuValue={authorsMenuValue}
								setMenuValue={setAuthorsMenuValue}
								menuList={authorsMenuList}
								setMenuList={setAuthorsMenuList}
								property={"username"}

							/>
						}
						</div>
					</div>
					
				</div>

				
				<SearchOpenBox 
							open={openSearchBox} 
							handleOpenSearchBox={handleOpenSearchBox}
							searchText={searchText}
							setSearchText={setSearchText}
							setShowSearchResults={setShowSearchResults}
							handleSearch={handleSearch}
				/>
			</div>	
			
			<div>
				{}
			</div>
			{
				showSearchResults 
				? <div className="flex flex-col ">
						<div className=" flex flex-row"
							     
						>
							
							<div className="flex flex-col justify-center btn text-gray-900    text-[40px] xs:text-[30px] "
								onClick={() => {setShowSearchResults(false); setSearchText("")}}
							>
								<span >
									<IoMdClose />
								</span>
							</div>

							<div className="flex flex-col justify-center ml-4">
					    	{searchText.length > 0 ? `Results For ${searchText}` : "No Results" }
					    </div>

						</div>

				    

						<UserArticles articles={searchResults}/>
				  </div>

				: <UserArticles articles={articlesToFilter}/>
			}
			
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
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {useDispatch,useSelector} from 'react-redux';
import Loading from "../../../components/public/Loading";
import LoadingBox from "../../../hooks/useLoading"

import { FiEdit3 } from "react-icons/fi";

import SideBar from "../../../components/articles/add/SideBar" 
import TypingBox from "../../../components/articles/add/TypingBox" 
import DropDownMenu from "../../../components/layout/DropDownMenu"

import { getCategories} from "../../../redux/CategorySlice.js";
import { setShowActionSuccessMsg} from "../../../redux/SuccessMsgSlice.js";

const AddArticle = () => {

	// const menuList = [
	// 	{title: 'sport'},
	// 	{title: 'family'},
	// 	{title: 'technology'},
	// 	{title: 'science'},
	// 	{title: 'new'},
	// ];

	const [title , setTitle] = useState("");
	const [content , setContent] = useState("");
	const [menuValue , setMenuValue] = useState("");
	const [menuList , setMenuList] = useState("")

	const [error , setError] = useState("");
	const [showError , setShowError] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loadingProps = LoadingBox();
	const loading = loadingProps.loading;
	
	const{currentUser}=useSelector(state=>state.auth);
	const {articles} = useSelector(state => state.article);
	const {allCategories, isLoading} = useSelector(state => state.category);

	useEffect(()=>{
		
		if(!currentUser)
			navigate("/login")

	},[currentUser]);

	useEffect(()=>{

		if(error && showError) {
			setTimeout(()=>{
				setShowError(false)
			},2500);
		} 

	},[error,showError])

	useEffect(()=>{
		
		dispatch(getCategories())
		
		console.log('categories are :',allCategories)
		
	},[setMenuValue,dispatch]);

	useEffect(()=>{
		setMenuList(allCategories)
		console.log("setting categories....")
	},[allCategories])

	const handlePublishClick = async() => {
		if(!title || !content){
			setError("title or content must not be empty");
			setShowError(true)
			
			return;
		}

		const articleFormData = {title,content,authorId:currentUser.id,author:currentUser.username}
		console.log("Fonm in add article is :",articleFormData);

		try {
			const response = await fetch("/api/articles" , {
				method: "POST" ,
				body: JSON.stringify(articleFormData) ,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const res = response.json()
            if(response.ok) {
				dispatch(setShowActionSuccessMsg(true));
            	navigate(-1)
            }
		} catch(error) {
			setError(error)
		}
	}

	if(loading){
		return <Loading />
	}
	return (
		<div className="[position:relative]">

			{/* Error Box */}
			{
				showError && 
				<div className="[position:absolute] [bottom:15px] [left:300px] bg-[#e92424] [width:50%] p-1 rounded text-white">
					<div className="text-center">
						{error} 
					</div>
				</div>
			}
		    {/* upper box */}
			<div className=" flex  mt-4 mb-4">

				<span className="flex text-gray-700 ml-4 xs:text-[32px] lg:text-[40px] italic" >
					Write your thoughts
					<span className="flex flex-col justify-center pl-1">
						<FiEdit3 />
					</span>
				</span>

				
				
			</div>

			<div className="flex xs:flex-col md:flex-row mb-5">

				{/* left */}
			    <div className="xs:px-2 md:px-3 md:basis-11/12  lg:basis-9/12 ">
				    <div className="flex flex-col [width:100%]">
					    <span className="xs:text-[26px] sm:text-[30px] lg:text-[36px] text-[#666]">
						    category
					    </span>
						{
							!loading 
							&&
							<DropDownMenu 
								
								inputTitle={"new Category"} 
								menuValue={menuValue}
								setMenuValue={setMenuValue}
								menuList={menuList}
								setMenuList={setMenuList}
							/>

						}
					</div>

					

			    	<TypingBox title={title} setTitle={setTitle} content={content}
			    	setContent={setContent} />
			    </div>
				
				{/* right */}
			    <div className="md:basis-1/12  lg:basis-3/12">
			    	<SideBar handlePublishClick={handlePublishClick} disabled={showError} />
			    </div>

				
			</div>

			<div></div>
		</div>	
	)
}

export default AddArticle
import {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom' 
import {useNavigate} from 'react-router-dom' 
import {useDispatch,useSelector} from 'react-redux';
import { FiEdit3 } from "react-icons/fi";

import SideBar from "../../../components/articles/add/SideBar" 
import TypingBox from "../../../components/articles/add/TypingBox" 
import DropDownMenu from "../../../components/layout/DropDownMenu"

import Loading from "../../../components/public/Loading";
import LoadingBox from "../../../hooks/useLoading";

import {getCategoryByTitle} from "../../../assets/helpers.js";
import { getCategories} from "../../../redux/CategorySlice.js";
import { setShowActionSuccessMsg} from "../../../redux/SuccessMsgSlice.js";

const EditArticle = () => {
    
	const dispatch = useDispatch();

    const [editedArticle, setEditedArticle] = useState({})

	// .... state for categories Dropdown Box....
	const [menuValue , setMenuValue] = useState("");
	const [menuList , setMenuList] = useState("")
	const [newCategoryTitle , setNewCategoryTitle] = useState("");

    const [error , setError] = useState("");
	const [showError , setShowError] = useState(false);

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading;

    const params = useParams();
    const navigate = useNavigate();
	
	const{currentUser}=useSelector(state=>state.auth);
	const {allCategories, isLoading} = useSelector(state => state.category);
	
	const categoryElement = {
		authorId: currentUser.id
	}

    const handleChangeEditedArticle = (e)=>{
    	
		setEditedArticle({
			...editedArticle,
			[e.target.id] : e.target.value
		})
    }
	useEffect(()=>{
		if(!params.id){
			navigate("/dashboard")
		}
		getArticle(params.id)
	},[]);

	useEffect(()=>{

		if(error && showError) {
			setTimeout(()=>{
				setShowError(false)
			},2500);
		} 

	},[error,showError])

	useEffect(()=>{
		
		dispatch(getCategories())
		// setMenuList(allCategories);
		console.log('categories are :',allCategories)
		
	},[setMenuValue,dispatch]);

	useEffect(()=>{
		setMenuList(allCategories);
	},[isLoading])

	useEffect(()=>{
		setMenuList(allCategories)
		console.log("menu list is :",menuList);
		menuList ? 
			setMenuValue(menuList[0]?.title) 
			: setMenuValue("");
		
		console.log("setting categories....")

		// menuList 
		// 	? console.log("cat id is ::", getCategoryById(editedArticle.categoryId) )
		// 	: console.log("not ready yet")

		menuList 
		?  setMenuValue( getCategoryById(editedArticle.categoryId)) 
		: console.log("not ready yet")
	},[allCategories]);

	const getCategoryById = (id)=> {

		let categoryTitle = "empty"
		menuList?.forEach(category => {
					if(category._id === id)
						categoryTitle = category.title;
		});
		return categoryTitle;
	}
	const getArticle = async (articleId)=> {
		try {
			// console.log('payload is',payload)
			const res = await fetch(`http://localhost:5000/api/articles/${articleId}`);
			
			const response = await res.json();
		    console.log('responseis',response );
			if(res.status == 200) {
				setEditedArticle(response);
			}
		}catch(err){

			const error = {
				message : "Error User Not Found"
			}
			console.log(error.message)
	    
		}
	}

	const saveNewCategory =  async () => {

			const newCategory = {
				title : menuValue ,
				authorId : currentUser.id 
			}

			try {
				const res = await fetch("/api/categories" , {
					method: "POST" ,
					body: JSON.stringify({title : menuValue , authorId : currentUser.id}) ,
					headers: {
						'Content-Type': 'application/json'
					}
				})
				
				const response = await res.json();
				console.log('...categories...',response);
				// if(response.status == 200)
					return response._id;
				// else 
				// 	return "error"
			}catch(err){
			    const error = {
					message : "Error ,something went wrong"
				}
				console.log('errrrro')
				return error;
			}

	}
	const handleEditClick = async() => {
		if(!editedArticle.title || !editedArticle.content){
			console.log('title or content must not be empty')
			setError("title or content must not be empty");
			setShowError(true)
			
			return;
		}

		let categoryId = "";
		// user added a new category and selected it
		if(menuValue === newCategoryTitle) {
			categoryId =  await saveNewCategory();

		// user selected previus category
		} else {
			categoryId = getCategoryByTitle(menuList , menuValue)
		}

		console.log('id is',categoryId)
		
		const {title,content} = editedArticle;
		const articleFormData = {title,content, categoryId:categoryId};
		// const articleFormData = {editedArticle.title,editedArticle.content,authorId:currentUser.id,author:currentUser.username}
		console.log("Fonm in edit article is :",articleFormData);

		try {
			const response = await fetch(`/api/articles/update/${params.id}` , {
				method: "PUT" ,
				body: JSON.stringify(articleFormData) ,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const res = response.json()

			// navigate back or to dashboard
            if(response.ok) {
            	dispatch(setShowActionSuccessMsg(true));
            	navigate(-1);
            	// navigate(-1)
            }
		} catch(error) {
			setError(error)
		}
	}

	if (loading) {
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
					Edit 
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
								
								isStatic={false}
								inputTitle={"new Category"} 
								menuValue={menuValue}
								setMenuValue={setMenuValue}
								menuList={menuList}
								setMenuList={setMenuList}
								element={categoryElement}
								newValue={newCategoryTitle}
								setNewValue={setNewCategoryTitle}
								property={"title"}
							/>

						}
					</div>
			    	<TypingBox editedTitle={editedArticle.title} EditedContent={editedArticle.content} editing={true}
			    	handleChangeEditedArticle={handleChangeEditedArticle}/>
			    </div>
				
				{/* right */}
			    <div className="md:basis-1/12  lg:basis-3/12">
			    	<SideBar handleEditClick={handleEditClick} editing={true} />
			    </div>

				
			</div>

			<div></div>
		</div>	
	)
}

export default EditArticle
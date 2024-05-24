
import {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom' 
import {useNavigate} from 'react-router-dom' 
import {useDispatch,useSelector} from 'react-redux';
import { FiEdit3 } from "react-icons/fi";

import SideBar from "../../../components/articles/add/SideBar" 
import TypingBox from "../../../components/articles/add/TypingBox" 

import Loading from "../../../components/public/Loading";
import LoadingBox from "../../../hooks/useLoading";

import { setShowActionSuccessMsg} from "../../../redux/ArticleSlice.js";

const EditArticle = () => {
    
	const dispatch = useDispatch();

    const [editedArticle, setEditedArticle] = useState({})

    const [error , setError] = useState("");
	const [showError , setShowError] = useState(false);

	const loadingProps = LoadingBox();
	const loading = loadingProps.loading;

    const params = useParams();
    const navigate = useNavigate();

	

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

	const getArticle = async (articleId)=> {
		try {
			// console.log('payload is',payload)
			const res = await fetch(`http://localhost:5000/api/articles/${articleId}`);
			
			const response = await res.json();
		    console.log('response',response);
			if(response) {
				setEditedArticle(response)
				console.log("dfdfdf")
			}
		}catch(err){

			const error = {
				message : "Error User Not Found"
			}
			console.log(error.message)
	    
		}
	}

	const handleEditClick = async() => {
		if(!editedArticle.title || !editedArticle.content){
			console.log('title or content must not be empty')
			setError("title or content must not be empty");
			setShowError(true)
			
			return;
		}
		
		const {title,content} = editedArticle;
		const articleFormData = {title,content};
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
            	navigate("/dashboard");
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
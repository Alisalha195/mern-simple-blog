import {useEffect, useState} from 'react'

import {useNavigate ,Navigate, Routes , Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';

import articleImage from '../../assets/images/backgroundhero.jpg';
import useDeleteBox from '../../hooks/useDeleteBox';
import DeleteBox from '../articles/delete/DeleteBox';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import  {FaRegThumbsDown}  from "react-icons/fa6";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';	

import { setActionType } from "../../redux/SuccessMsgSlice.js";



const ArticleCard = ({size ,id, title,content,author,authorId,pending,approved, likes, dislikes }) => {

	const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.auth) ;

	const [cardWidth, setCardWidth] = useState(0)
	const navigate = useNavigate();
	const articleUrl = "http://localhost:3000/article"
    
    const DeleteBoxProps = useDeleteBox()

	const openDeleteBox = DeleteBoxProps.open;
	const handleOpenDeleteBox = DeleteBoxProps.handleOpenDeleteBox

	const textLong = 15;
	let titleBoxWidth="";
	// const articleText = "this is the text about the article you stand at now , you can click the article title to view the entire details of this particular article." 

	const navigateTo = (link)=> {
		navigate(`/articles/${id}`)
	} 
	const getBreifText = (text , cutPoint) => {
		return (`${text.substring(0,cutPoint)}...`);
	} ;
	const getLikesBreifValue = (value)=> {
	  if((value >= 0) && (value <= 999)) {
	    return value;
	  } 
	  if((value > 999) && (value <= 999999) ) {
	    return (`${value/1000}K`);
	  } else if((value > 999999) && (value < 999999999)) {
	    return (`${value/1000000}M`);
	  }
	};

	const getCardWidth = () =>{
		titleBoxHeight = document.getElementById("titleBox").offsetWidth;
		console.log(titleBoxHeight);
	}
	
// 	useEffect(()=>{
// 		// setTimeout(()=>{
// 		// 	titleBoxHeight = document.getElementsByClassName("titleBox")
// 		//  console.log("titleBoxHeight : ",titleBoxHeight[0].firstChild)
// 		// },1000);
// 
// 		
// 		// console.log('auth user is :',currentUser.id);
// 		// console.log('authorId is :',authorId);
// 	},[titleBoxHeight])
	return (
		
		(size == "small")  
		?   <div className={openDeleteBox ?"no-doc-scroll flex justify-center" : " flex justify-center"}>
				<div className="xs:pb-1 xmd:pb-2 shadow-md hover:shadow-gray-500  border-2 border-gray-500 xs:[border-radius:6px] md:[border-radius:10px] [overflow:hidden] xs:[width:200px]
				    sm:[width:300px] xmd:[width:350px] "
					 
			    >
					<div className=" ">
						<img src={articleImage} />
					</div>
					<div className="flex flex-column justify-between pl-1  pt-1 ">
						<div className="basis-12/12" >
							
							<div className="titleBox btn :leading-6 text-gray-800 font-bold hover:text-gray-700 [overflow:hidden]
							     xs:text-[23px] sm:text-[28px] xmd:text-[34px] [max-height:52px]"

							     id="titleBox" 
							     onClick={()=>navigateTo(id)}
						     >
								{getBreifText(title, textLong ) }
							</div>
							<div className=" flex flex-row xs:pl-[5px] xmd:pl-[8px] xs:text-[18px] sm:text-[22px] xmd:text-[24px] lg:text-[25px] font-bold text-gray-700">
								<span>
									{author &&getBreifText(author, textLong ) }
								</span>
								
							</div>
							<div className="xs:pl-[5px] xmd:pl-[8px] xs:text-[14px] sm:text-[18px] xmd:text-[20px] lg:text-[21px] text-gray-700" >
								Mar-2-2010
							</div>
						</div>
						
					</div>
					<div className="xs:mt-[4px]  md:mt-2 xs:pl-[10px] md:pl-2 
					                xs:pr-2 xmd:pr-4 text-gray-600 xs:text-[12px] sm:text-[14px]" 
	                >
					{
						content ? getBreifText(content, textLong ) : "No Content"
						
					}	
					</div>
					

					{/* likes & seen */}
					<div className=" xs:hidden sm:flex flex-row justify-center	">
						<div className="flex flex-wrap mt-1 justify-center  text-gray-900 xmd:pr-3 text-[20px] ">
							
							<div className="xs:mr-2 xmd:mr-4 flex ">
								<div className="flex flex-col justify-center mr-1 ">
									<FaRegThumbsDown style={{fontSize:"22px", color:"#ff6e60"}}  />
								</div>
								<div className="text-center"
								    style={{fontSize:"22px"}}>
									{getLikesBreifValue(dislikes)}
								</div>
							</div>

							<div className="flex ">
								<div  className="basis-4/12 flex flex-col justify-center mr-1"> 
									<ThumbUpAltOutlinedIcon style={{fontSize:"22px", color:"#1960ff"}} />
								</div>
								<div style={{fontSize:"22px"}}>
									{getLikesBreifValue(likes)}
								</div>
							</div>
						</div>
						
					</div>
					{
						(currentUser) &&
						(currentUser.id == authorId) && 
						<div className="flex flex-row xs:text-[20px] md:text-[22px] pl-2 mt-1">
							<div className="btn flex flex-col justify-start text-[#025921] mr-2 px-[4px]"
								onClick={()=>{navigate(`/articles/edit/${id}`); dispatch(setActionType("edit"));}}
							>
								edit
							</div>
							<div className="btn flex flex-col justify-center  text-[#ee2e11]  px-[4px]"
							
								onClick={()=>{handleOpenDeleteBox('open');dispatch(setActionType("delete"));}}
							>
								delete
							</div>
						</div>
					}
				</div>
				<DeleteBox articleId={id} title={title} open={openDeleteBox} handleOpenDeleteBox={handleOpenDeleteBox}/>
			</div>

		:
	    <div className="flex justify-center">
			<div className="article-card shadow-md hover:shadow-gray-500 pb-4 border-2 border-gray-500">
				<div className="article-img bg-blue-400">
					<img src={articleImage} />
				</div>
				<div className="flex flex-column justify-between pl-1  pt-2 ">
					<div className="" >
						
						<div className="btn leading-6 text-gray-800 font-bold hover:text-gray-700" 
						     style={{fontSize:"36px"}}>
							{title}
						</div>
						<div className="pl-1  text-xs font-bold text-gray-700">
							<span>{author} <EditOutlinedIcon style={{fontSize:"24px",lineHeight:"20px"}} /></span>
						</div>
						<div className="pl-1  text-xs text-gray-700" style={{fontSize:"18px"}}>
							Mar-2-2010
						</div>
					</div>
					<div >
						<div className="flex mt-1 justify-center  text-gray-900 pr-3" style={{fontSize:"20px"}}>
							
							<div className="mr-2 flex">
								<div >
									<VisibilityOutlinedIcon style={{fontSize:"30px", color:"#ff6e60"}}  />
								</div>
								<div style={{fontSize:"22px"}}>1k</div>
							</div>

							<div className="flex ">
								<div  > 
									<ThumbUpAltOutlinedIcon style={{fontSize:"24px", color:"#1960ff"}} />
								</div>
								<div style={{fontSize:"22px"}}>200</div>
							</div>
						</div>
						<div>
							
						</div>
						
					</div>
				</div>
				<div className="pl-2 pr-4 text-gray-600" style={{fontSize:"25px"}}>
					text text text texttext texf dt dfg dfgdf fdg texttext textte xttext....
				</div>
			</div>
		</div>
	)
	
}

export default ArticleCard
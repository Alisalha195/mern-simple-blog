import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlinedIcon';	

import {useNavigate ,Navigate, Routes , Route} from 'react-router-dom'



import articleImage from '../../assets/images/backgroundhero.jpg';

const ArticleCard = ({size ,id, title,content,author,pending,approved, likes, dislikes }) => {

    
	const navigate = useNavigate();
	const articleUrl = "http://localhost:3000/article"
    // console.log('id',id)
	const textLong = 45;
	const articleText = "this is the text about the article you stand at now , you can click the article title to view the entire details of this particular article." 

	const navigateTo = (link)=> {
		navigate(`/articles/${id}`)
	} 
	const getBreifText = (text , cutPoint) => {
		return (`${text.substring(0,cutPoint)}...`);
	} ;
	const getLikesBreifValue = (value)=> {
	  if((value > 0) && (value <= 999)) {
	    return value;
	  } 
	  if((value > 999) && (value <= 999999) ) {
	    return (`${value/1000}K`);
	  } else if((value > 999999) && (value < 999999999)) {
	    return (`${value/1000000}M`);
	  }
	};
	return (
		
		(size == "small")  
		?   <div className="flex justify-center">
				<div className="xs:pb-1 xmd:pb-2 shadow-md hover:shadow-gray-500  border-2 border-gray-500 xs:[border-radius:6px] md:[border-radius:10px] [overflow:hidden] xs:[width:200px]
				    sm:[width:300px] xmd:[width:350px] "
					 
			    >
					<div className=" ">
						<img src={articleImage} />
					</div>
					<div className="flex flex-column justify-between pl-1  pt-1 ">
						<div className="basis-12/12" >
							
							<div className="btn :leading-6 text-gray-800 font-bold hover:text-gray-700 [overflow:hidden]
							     xs:text-[23px] sm:text-[28px] xmd:text-[34px]" 
							     onClick={()=>navigateTo(id)}
						     >
								{title}
							</div>
							<div className=" flex flex-row xs:pl-[5px] xmd:pl-[8px] xs:text-[18px] sm:text-[22px] xmd:text-[24px] lg:text-[25px] font-bold text-gray-700">
								<span>
									{author}
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
					{getBreifText(content, textLong )}	
					</div>
					

					{/* likes & seen */}
					<div className=" xs:hidden sm:flex flex-row justify-center	">
						<div className="flex flex-wrap mt-1 justify-center  text-gray-900 xmd:pr-3 text-[20px] ">
							
							<div className="xs:mr-2 xmd:mr-4 flex ">
								<div className="flex flex-col justify-center mr-1 ">
									<VisibilityOutlinedIcon style={{fontSize:"26px", color:"#ff6e60"}}  />
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
					<div className="flex flex-row xs:text-[20px] md:text-[22px] pl-2 mt-1">
						<div className="btn flex flex-col justify-start text-[#025921] mr-2 px-[4px]"
							onClick={()=>navigate(`/articles/edit/${id}`)}
						>
							edit
						</div>
						<div className="btn flex flex-col justify-center  text-[#ee2e11]  px-[4px]">
							delete
						</div>
					</div>
				</div>
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
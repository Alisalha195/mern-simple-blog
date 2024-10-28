

import {useEffect , useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch,useSelector} from 'react-redux';

import { setShowActionSuccessMsg} from "../../../redux/SuccessMsgSlice.js";
import { IoMdClose } from "react-icons/io";

const DeleteBox = ({articleId ,title ,open , handleOpenDeleteBox}) => {  
	
	const dispatch = useDispatch()
	const [waiting , setWaiting]  = useState(false)

	const deleteArticleUrl = "http://localhost:5000/api/articles/delete"
	
	const getBreifText = (text , cutPoint) => {
		return (`${text.substring(0,cutPoint)}...`);
	} ;

	const handleDeleteClick = async() => {
		console.log('clicked!',articleId)

		try {
			setWaiting(true);
			const res = await fetch(`${deleteArticleUrl}/${articleId}`,{
				method:"DELETE"
				
			});
			const response = await res.json()
			console.log('response in delete',response)
			
			// handleOpenDeleteBox();
			dispatch(setShowActionSuccessMsg(true));
			// handleOpenDeleteBox();
			setTimeout(()=>{
				handleOpenDeleteBox();
				setWaiting(false);
			},1500);

		}catch(error) {
			setWaiting(false)
			console.log("error :");
		}
	}
	return (
 
		<div className={open ? "  flex flex-row justify-center  bg-[#1e343d]/[.89]  [height:100vh] [width:100vw]   [position:fixed] [top:0] [left:0]" : "hidden"}

		>

			<div className={open ? " flex flex-col bg-[#1e343d] p-1  xs:[width:90vw] md:[width:70vw] lg:[width:60vw] xl:[width:50vw]   [position:fixed] [top:10px]  [z-index:200] [border:2px_solid_#aaa] [border-radius:10px]"
	          : "hidden" }
              
	     	>
			<div className="flex flex-col  mt-7 mb-6   justify-center">
					<div className="flex flex-row justify-center mb-[30px] text-[#999] text-[35px] font-bold ">
						{title && getBreifText(title)}
					</div>
					<span className="flex flex-row justify-center text-white">
						are you sure ?
					</span>
					<div className="flex flex-row justify-center text-white mt-4">

						<button className={waiting ? "btn [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#e97b7b]" 

						    :"btn [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#962b07]"}
							onClick={handleDeleteClick}
							disabled={waiting ? waiting  :false}
						>
							{waiting ? "deleting.."  : "delete"}
						</button>

					</div>

			</div>

			<div className=" btn text-white [position:fixed]  xs:[top:15px]  md:[top:20px] text-[40px] xs:text-[30px] "
			     onClick={() => handleOpenDeleteBox()}
			>
				<span>
					<IoMdClose />
				</span>
			</div>
		</div>	
		</div>

	)
}
export default DeleteBox
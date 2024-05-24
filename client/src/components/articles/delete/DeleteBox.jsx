

import {useEffect , useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { IoMdClose } from "react-icons/io";

const DeleteBox = ({title ,open , handleOpenDeleteBox}) => {  
	
	const [searchText , setSearchText]  = useState("")

	useEffect(()=> {
		document.getElementById("#serachInput").focus()
	},[open])

	const handleCloseSearchBox = () => {
		handleOpenDeleteBox("close");
		setSearchText("")
		
	}

	const getBreifText = (text , cutPoint) => {
		return (`${text.substring(0,cutPoint)}...`);
	} ;

	return (
 
		<div className={open ? "  flex flex-row justify-center  bg-[#1e343d]/[.89]  [height:100vh] [width:100vw]   [position:fixed] [top:0] [left:0]" : "hidden"}

		>

			<div className={open ? " flex flex-col bg-[#1e343d] p-1  xs:[width:90vw] md:[width:70vw] lg:[width:60vw] xl:[width:50vw]   [position:fixed] [top:10px]  [z-index:200] [border:2px_solid_#aaa] [border-radius:10px]"
	          : "hidden" }
              
	     	>
			<div className="flex flex-col  mt-7 mb-6   justify-center">
					<div className="flex flex-row justify-center mb-[30px] text-[#999] text-[35px] font-bold ">
						{getBreifText(title)}
					</div>
					<span className="flex flex-row justify-center text-white">
						are you sure ?
					</span>
					<div className="flex flex-row justify-center text-white mt-4">
						<span className="btn [border:1px_solid_#ccc] [border-radius:8px] py-[2px] px-[10px] bg-[#962b07]">
							delete
						</span>
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

import {useEffect , useState} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { IoMdClose } from "react-icons/io";

const SearchOpenBox = ({open , handleOpenSearchBox, searchText, setSearchText, setShowSearchResults , handleSearch}) => {  
	
	// const [searchText , setSearchText]  = useState("")

	useEffect(()=> {
		document.getElementById("#serachInput").focus()
	},[open])

	const handleCloseSearchBox = () => {
		handleOpenSearchBox("close");
		setSearchText("")
		
	}


	return (
 
		<div className={open ? "  flex flex-row justify-center  bg-[#1e343d]/[.89]  [height:100vh] [width:100vw]   [position:fixed] [top:0] [left:0]" : "hidden"}

		>

			<div className={open ? " flex flex-col bg-[#1e343d] p-1  xs:[width:90vw] md:[width:70vw] lg:[width:60vw] xl:[width:50vw]   [position:fixed] [top:10px]  [z-index:200] [border:2px_solid_#aaa] [border-radius:10px]"
	          : "hidden" }
              
	     	>
			<div className="flex flex-row  mt-7 mb-6   justify-center">
				<div className=" p-[1px] [box-shadow:0_0_5px_#ddd] 
				                xs:[width:94%] md:[width:90%] lg:[width:80%]  flex [border-radius:10px]"
				     >

					<input id="#serachInput" className="serachInput leading-7 pl-2 py-1  focus:text-gray-900 text-gray-600 [width:100%]  [border-right-width:0] [outline:none]
					     [border-radius:10px_0_0_10px] "  
					        
					       type="text"
					       value={searchText}
					       onChange={(e) =>setSearchText(e.target.value)}
			        />

					<span className="btn pr-1 pl-2 bg-white text-[26px] text-gray-700 flex flex-col justify-center [border-radius:0_10px_10px_0]    [border-left-width:0] "
					
						onClick={handleSearch}		
					>

						<SearchOutlinedIcon className=""/>
					</span>
				</div>
			</div>

			<div className=" btn text-white [position:fixed]  xs:[top:15px]  md:[top:20px] text-[40px] xs:text-[30px] "
			     onClick={() => handleCloseSearchBox()}
			>
				<span>
					<IoMdClose />
				</span>
			</div>
		</div>	
		</div>

	)
}
export default SearchOpenBox
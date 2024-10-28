
import {useState} from 'react'
import useSearchBox from "../../hooks/useSearchBox"

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchOpenBox from "../public/SearchOpenBox"

const ArticleSearchBox = () => {

	

	const openSearchBoxProps = useSearchBox()

	const openSearchBox = openSearchBoxProps.open;
	const handleOpenSearchBox = openSearchBoxProps.handleOpenSearchBox

	return (
		<div className={openSearchBox ? "no-doc-scroll mt-7 ml-7 pt-3 px-3" : " mt-7 ml-7 pt-3 px-3 "} >
			<div>
				<div className="flex flex-row text-gray-700" >
					
					<h3 className="xs:text-[28px] sm:text-[32px] xmd:text-[36px]" >

						Looking For Something 
					</h3>
					
					
					<span className="btn pr-1 pl-2 bg-white text-gray-700 flex flex-col justify-center "
					 
					    onClick={()=>handleOpenSearchBox("open")}

					>
						<SearchOutlinedIcon className=""/>
					</span>
				</div>

				
			</div>

			<SearchOpenBox open={openSearchBox} handleOpenSearchBox={handleOpenSearchBox}/>

		</div>
		
	)
}

export default ArticleSearchBox






// -----------

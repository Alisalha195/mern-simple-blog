import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import {useDispatch,useSelector} from 'react-redux';

import { getCategories} from "../../redux/CategorySlice.js";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import useSearchBox from "../../hooks/useSearchBox"

import SearchOpenBox from "../public/SearchOpenBox"
import DropDownMenu from "../layout/DropDownMenu"

const ArticleFilterBox = () => {

	// .... state for categories Dropdown Box....
	const [menuValue , setMenuValue] = useState("");
	const [menuList , setMenuList] = useState("")

	const {allCategories, isLoading} = useSelector(state => state.category);
	
	const openSearchBoxProps = useSearchBox()

	const openSearchBox = openSearchBoxProps.open;
	const handleOpenSearchBox = openSearchBoxProps.handleOpenSearchBox;

	const dispatch = useDispatch();

	return (
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

					<div className="sm:ml-2 mb-2">	
						<span className=" xs:[max-width:150px]" >  

							<DropDownMenu />
							
						</span>
					</div>
					<div className="sm:ml-2 mb-2">
						<select className="text-gray-700 sm:px-2 lg:px-3 xs:px-1 xs:text-[22px] md:text-[24px]
							             [border-radius:4px] [overflow:hidden]
							              [text-overflow:ellipsis] [white-space:nowrap]"
							        

							        >
								
								<option value="all">any author</option>
								<option value="programing">Jhon</option>
								<option value="science">Randon</option>
								<option value="sport">Dean</option>
								<option value="family">Heazer</option>
							</select>
					</div>
					<div className="sm:ml-2 mb-2">
						<select className="text-gray-700 sm:px-2 lg:px-3 xs:px-1 xs:text-[22px] md:text-[24px]
							             [border-radius:4px] [overflow:hidden]
							              [text-overflow:ellipsis] [white-space:nowrap]"
							        

							        >
								
								<option value="all">latest</option>
								<option value="programing">2024</option>
								<option value="science">2023</option>
								<option value="sport">2022</option>
								<option value="family">2021</option>
							</select>
					</div>
				</div>

				

				<SearchOpenBox open={openSearchBox} handleOpenSearchBox={handleOpenSearchBox}/>
			</div>	
	)
}

export default ArticleFilterBox;
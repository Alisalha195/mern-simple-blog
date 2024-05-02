
import { FiEdit3 } from "react-icons/fi";

import SideBar from "../../../components/articles/add/SideBar" 
import TypingBox from "../../../components/articles/add/TypingBox" 

const EditArticle = () => {
	return (
		<div>

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
			    	<TypingBox />
			    </div>
				
				{/* right */}
			    <div className="md:basis-1/12  lg:basis-3/12">
			    	<SideBar />
			    </div>

				
			</div>

			<div></div>
		</div>	
	)
}

export default EditArticle
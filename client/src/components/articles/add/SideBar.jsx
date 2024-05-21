
import { IoMdAddCircleOutline } from "react-icons/io";

const SideBar = ({handlePublishClick,disabled}) => {
	return (
		<div className=" flex flex-col justify-evenly py-2 xs:px-2 md:px-3 [height:100%] xs:mb-[100px] xs:mt-[14px] lg:mt-[0]">
			
			
			{/* tools box */}
			<div className=" xs:basis-10/12">
				<div>
					
					<div className=" flex">
						<span className="p-1 btn text-gray-800 text-[40px]">
							<IoMdAddCircleOutline className=" btn " />
						</span>
					</div>
				</div>
			</div>

			{/* publish button */}
			<div className=" flex 	xs:mt-8 lg:mt-2">
				<button className={disabled?"btn xs:py-[2px] xs:px-[8px] md:py-[4px] md:px-2 xs:text-[23px] md:text-[26px] text-gray-200 bg-gray-400 [border-radius:7px]" 

				    :"btn xs:py-[2px] xs:px-[8px] md:py-[4px] md:px-2 xs:text-[23px] md:text-[26px] text-gray-200 bg-gray-700 [border-radius:7px]"}

				         onClick={handlePublishClick}

						 disabled={disabled}

				>
					publish
				</button>
			</div>
		</div>	
	)
}
export default SideBar
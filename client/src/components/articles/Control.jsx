
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const Control = () => {

	const getPeriodFrom = (date) => {
		if(date < 2024) 
			return (2024 - 2010)  
		else 
			return ""
		
	}


	return (
		<div className="pl-4 pt-4 my-7  border-t-2 border-t-gray-200">
			<div className="flex flex-row justify-between ">

			    {/* left */}
				<div className="flex flex-row">
					{/* Likes   */}
					<div className="mr-3 " >
						<span className="mr-1 btn xs:inline sm:hidden ">
							<ThumbUpAltOutlinedIcon className="text-blue-400   
							                             hover:text-blue-600 " 
								style={{fontSize:"28px"}} />
						</span>

						<span className="mr-1 btn xs:hidden sm:inline md:hidden">
							 <ThumbUpAltOutlinedIcon className="text-blue-400   
							                             hover:text-blue-600 " 
								style={{fontSize:"32px"}} />
						</span>
						<span className="mr-1 btn xs:hidden  md:inline">
							 <ThumbUpAltOutlinedIcon className="text-blue-400   
							                             hover:text-blue-600 " 
								style={{fontSize:"35px"}} />
						</span>


						<span className="text-gray-600 xs:text-[22px] sm:text-[24px] md:text-[27px]"
						 >
							200
						</span>
					</div>

					{/* Dislikes   */}
					<div className="mr-3 " >
						<span className="mr-1 btn xs:inline sm:hidden ">
							<ThumbDownOutlinedIcon className="text-red-300   
							                             hover:text-red-400 " 
								style={{fontSize:"28px"}} />
						</span>

						<span className="mr-1 btn xs:hidden sm:inline md:hidden">
							 <ThumbDownOutlinedIcon className="text-red-300   
							                             hover:text-red-400" 
								style={{fontSize:"32px"}} />
						</span>
						<span className="mr-1 btn xs:hidden  md:inline">
							 <ThumbDownOutlinedIcon className="text-red-300   
							                             hover:text-red-400" 
								style={{fontSize:"35px"}} />
						</span>


						<span className="text-gray-600 xs:text-[22px] sm:text-[24px] md:text-[27px]"
						 >
							200
						</span>
					</div>
				</div>
				
				{/* right */}
				<div className="flex flex-col justify-center">
					<div className="flex flex-row  text-right ">
						<div className="xs:text-[21px] md:text-[25px] text-gray-400">
							May 2 , 2010 - 
						</div>

						<div className="xs:text-[20px] md:text-[24px] text-gray-400">
							{getPeriodFrom(2010)} y
						</div>	
					</div>
				</div>
				
			</div>
		</div>	
	)
}

export default Control
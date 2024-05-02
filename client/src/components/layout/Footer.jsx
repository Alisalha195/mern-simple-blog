import {useEffect ,useState} from "react";

import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import { FaRegHeart } from "react-icons/fa6";

const Footer = () => {
	
	return (
		<div id="footer" className="footer flex xs:flex-col sm:flex-row justify-center gap-6 mt-9 xs:p-1 sm:p-3 bg-gray-800 text-white "
			
		 >
			
			
			<div >
			    <div className=" text-center mb-1">
				    <span className="xs:text-[20px] sm:text-[25px] xmd:text-[28px]">
					    follow us
				    </span>
			    </div>
				<div className="flex justify-center xs:gap-2 md:gap-3">

					<span className=" btn  hover:text-blue-600 rounded xmd:text-lg xs:text-md"
						  >
						<FaFacebook />
					</span>
					<span className="btn hover:text-black xmd:text-lg xs:text-md"
						   >
						<FaXTwitter />
					</span>
					<span className="btn hover:text-red-500 xmd:text-lg xs:text-md">
						<FaInstagram />
					</span>
				</div>

			</div>
			<div className="flex flex-col justify-center">
				<div className="text-center xs:text-[18px] sm:text-[20px] xmd:text-[28px]">All writes reserved @2024</div>
				<div className="text-center xs:text-[18px] sm:text-[20px]  xmd:text-[28px]">
					<span >Designed by <span className="xs:text-[21px] sm:text-[20px] xmd:text-[28px] btn hover:text-blue-200">Alih</span> </span> 
					
				</div>
			</div>
			
		</div>	
	)
}
export default Footer
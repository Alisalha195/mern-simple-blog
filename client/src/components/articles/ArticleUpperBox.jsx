import Image from '../../assets/images/backgroundhero.jpg';

import UserProfileImage from '../user/UserProfileImage'


const ArticleUpperBox = () => {

	return (
		<div className="flex flex-row mt-[80px] text-center justify-around">
			

			<div className=" lg:basis-8/12 sm:basis-10/12 xs:basis-full" >
				<div className=" mx-auto" >
			
					<div className="pt-3 pb-4 flex flex-wrap justify-center  ">

						<h1 className="flex pt-3 text-gray-900 tracking-tight 
						          [max-width:100%] [font-weight:700] xs:text-[40px] sm:text-[46px] md:text-[50px] lg:text-[54px]"
					    >
							How to write your first article with amazing elements 
						</h1>
					</div>

					<div className="flex flex-wrap xs:pl-7  md:pl-5 lg:pl-4 pt-4 [width:100%]"
						 >
						{/* profile image */}
						
						<div className="xs:inline md:hidden">
							<UserProfileImage size={'sm'} rounded={true}/>
						</div>
						<div className="xs:hidden md:inline lg:hidden">
							<UserProfileImage size={'md'} rounded={true}/>
						</div>
						<div className="xs:hidden lg:inline ">
							<UserProfileImage size={'lg'} rounded={true}/>
						</div>
						
						{/* name & date */}
						<div className="ml-2 flex flex-col justify-center"> 
							<div className="text-gray-800  xs:leading-3 md:leading-4 tracking-tight [font-weight:600] xs:text-[24px] md:text-[25px] lg:text-[33px] text-left"
							  >
								John Doe
							</div>
							<div className="text-gray-600 [font-weight:500]  xs:text-[20px] md:text-[22px] lg:text-[25px]"
							 >
								may-2-2010
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>	
	)
}

export default ArticleUpperBox
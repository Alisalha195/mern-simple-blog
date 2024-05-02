
import UserProfileImage from "../..//user/UserProfileImage"

const AboutBox = () => {

	const breifInfo = "senior software engineer at Google , 3 years experience in web development and design , father of two children and loved husband"

	return (
		<div className=" flex md:flex-row xs:flex-col xs:flex-wrap sm:flex-nowrap mt-3 p-3 border-2 border-b-gray-300	">

			{/* profile image */}
			<div className="md:basis-5/12 lg:basis-4/12  flex justify-center">
				<div className="xs:hidden xl:flex">
					<UserProfileImage size={350}  />
				</div>
				<div className="xs:hidden lg:flex xl:hidden">
					<UserProfileImage size={300}  />
				</div>
				<div className="xs:hidden md:flex lg:hidden">
					<UserProfileImage size={250}  />
				</div>
				<div className="xs:hidden sm:flex md:hidden">
					<UserProfileImage size={200}  rounded={true}/>
				</div>
				<div className="xs:flex sm:hidden">
					<UserProfileImage size={"full"}   />
				</div>
			</div>

			{/* basic info */}
			<div className="leading-7 mt-3 md:basis-7/12   lg:basis-8/12">

				<div className="font-bold text-gray-800 xs:text-center  
				                md:text-left tracking-tight
								xs:text-[40px] sm:text-[50px] md:text-[54px] lg:text-[65px]
				  ">
					John Doe
				</div>

				<div className="pl-2 xs:mt-2 sm:mt-4 text-gray-700 xs:text-center md:text-left">
					<div className=" tracking-tight xs:text-[24px] sm:text-[27px] md:text-[30px] ">
						Software Engineer 
						<span className="text-xs ml-2 xs:hidden md:inline">27y</span>
					</div>
					<div className="text-sm text-gray-600 tracking-tight xs:text-[21px] sm:text-[23px] md:text-[25px]">
						john@gmail.com
					</div>
					<div className="xs:text-justify md:text-left xs:text-[26px] sm:text-[27px] 
					               md:text-[32px] mt-2  tracking-tight xs:px-4 sm:px-5 md:pl-1 md:pr-6">
						  {breifInfo}
					</div>
					<div className="text-sm  tracking-tight">
						
					</div>
				</div>
			</div>
		</div>	
	)
}
export default AboutBox
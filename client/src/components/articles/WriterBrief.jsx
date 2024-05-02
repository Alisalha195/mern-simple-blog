
import UserProfileImage from '../user/UserProfileImage'

const WriterBrief = () => {

	const textLong = 140;
	const breifInfo = "senior software engineer at Google , 3 years experience in web development and design , father of two children and loved husband"

	

	
	return (
		<div className="flex md:flex-row xs:flex-col mb-8 mt-3 ml-2 border-t-1	 border-t-gray-200  ">
			

			<div className="basis-10/12 flex xs:justify-start mt-2 px-2 border-l-1 border-t-gray-100">
				<div className="">

					<div className="flex flex-row mt-2">
						<div className="flex flex-col justify-center" >
							<div className="xs:inline md:hidden">
								<UserProfileImage size={'xs'} rounded={true}/>
							</div>
							<div className="xs:hidden md:inline lg:hidden">
								<UserProfileImage size={'sm'} rounded={true}/>
							</div>
							<div className="xs:hidden lg:inline ">
								<UserProfileImage size={'md'} rounded={true}/>
							</div>
						</div>
						<div className="flex flex-col  justify-center xs:text-[24px] md:text-[26px] lg:text-[30px] xs:ml-1 md:mr-2 md:ml-2	 text-gray-700  btn font-bold">
							John doe
						</div>
					</div>

					<div className="xs:text-[21px] md:text-[23px] lg:text-[26px] pl-2 pt-2 text-gray-500 flex-wrap">
						{breifInfo.substring(0,textLong)}
					</div>
				</div>
			</div>
		</div>	
	)
}
export default WriterBrief;

// import UserProfileImage from "../../components/user/UserProfileImage"

import AboutBox from "../../components/user/profile/AboutBox"
import UserArticles from "../../components/user/profile/UserArticles"



const Profile = () => {
	const userName = "john"
	return (
			<div className="xs:mb-[140px] sm:mb-[40px]">
				<AboutBox />

				<div className="flex xs:justify-center md:justify-start ml-3 mt-6 mb-7 xs:text-[28px] sm:text-[32px] md:text-[36px]">
					<div className="xmd:basis-5/12 lg:basis-4/12 xl:basis-3/12 pl-1 border-b-4 border-b-gray-300 font-bold text-gray-700 "
						 
					>
						{userName}`s Articles
					</div>
				</div>

				<UserArticles />
			</div>
	)
}
export default Profile
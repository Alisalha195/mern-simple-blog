


// import UserProfileImage from "../../components/user/UserProfileImage"

// import UserArticles from "../../components/user/profile/AboutBox"

import ArticleCard from '../../public/ArticleCard'


const UserArticles = () => {
	
	return (
			<div className="p-2">
				<div className="xs:flex xs:flex-row xs:[overflow-x:scroll] sm:[overflow-x:hidden]    sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-auto  align-center   gap-4 mt-7 xs:px-2 md:px-3">
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
					<ArticleCard size={"small"}/>
				</div>

				
			</div>
	)
}
export default UserArticles
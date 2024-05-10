


// import UserProfileImage from "../../components/user/UserProfileImage"

// import UserArticles from "../../components/user/profile/AboutBox"

import ArticleCard from '../../public/ArticleCard'


const UserArticles = ({articles}) => {
	
	return (
			<div className="p-2">
				<div className="xs:flex xs:flex-row xs:[overflow-x:scroll] sm:[overflow-x:hidden]    sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-auto  align-center   gap-4 mt-7 xs:px-2 md:px-3">

					{
						articles.map((article, index)=> (
							<ArticleCard  key = {index}
							            size={"small"}
									    title={article.title}	
									    content={article.content}
									    author={article.author}
									    pending={article.pending}
									    approved={article.approved}
									    likes={article.likes}
									    dislikes={
									      article.dislikes
									    }
							/>
						))
					}
					
				</div>
			</div>
	)
}
export default UserArticles
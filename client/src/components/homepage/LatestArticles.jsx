
import {useNavigate} from 'react-router-dom' 

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

import ArticleCard from "../public/ArticleCard"

import ArticleSearchBox from "./ArticleSearchBox"

import UserArticles from "../user/profile/UserArticles"

const LatestArticles = () => {

	const navigate = useNavigate()

	return (
		<div className="mt-9">
			<h3 className="h3 xs:ml-2 xmd:ml-5 mb-3 text-gray-700 
			xs:text-center sm:text-left sm:[border-bottom:2px_solid_#ccc] xmd:[border-bottom:3px_solid_#ccc]
			[max-width:400px] xs:[font-weight:500] 
			xs:[font-size:28px] xmd:[font-size:45px]  " 
			>
				Latest Articles
			</h3>
			
			<ArticleSearchBox />

			< UserArticles />

			<div className="xs:mt-1 xmd:mt-3 text-center ">
				<span className=" hover:text-gray-600 text-gray-700 btn px-1 
				                  xs:[fontSize:25px] xmd:[fontSize:30px]"
	                  onClick={() => navigate("/articles")} 
				>
					more articles
					<KeyboardArrowRightOutlinedIcon style={{fontSize:"30px"}} />
				</span>
				
			</div>

		</div>
		
	)
}

export default LatestArticles
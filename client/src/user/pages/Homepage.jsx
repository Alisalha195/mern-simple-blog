
import useReducer from "react"
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import HeroSection from "../../components/homepage/HeroSection"
import LatestArticles from "../../components/homepage/LatestArticles"
import ArticleSearchBox from "../../components/homepage/ArticleSearchBox"
import TagsBox from "../../components/homepage/TagsBox"


const Homepage = () => {
// 
// 	const [state , dispatch] = useReducer((action , ) => {
// 
// 		if(action.type == ) {
// 			let varx = action.payload
// 		}
// 
// 	})

	return (
		<div className="overscroll-none">
			
			<HeroSection />
			
			<LatestArticles />
			<hr />
			
			<div className="mb-9" style={{width:"90%"}}>
				<TagsBox inBottom={true} />
			</div>
			
			{/* <div style={{height:"700px", backgroundColor:"#0000aa"}}></div> */}
		</div>
		
	)
}
export default Homepage;
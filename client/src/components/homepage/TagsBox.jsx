
import Tag from "../public/Tag"

const TagsBox = ({inBottom}) => {

	// const getHeight = (position) => {
	// 	if(position == "end")
	// 		return true
	// 	else 
	// 		return false
	// } 
	return (
		<div className={inBottom ? "xs:[min-height:600px] sm:[min-height:400px] md:[min-height:300px] " 
		    : " "}
		>
			<div className="flex flex-wrap xs:pl-1 xs:mt-2  xmd:pl-3 xmd:mt-3 mb-5 	  "
			     >
				<Tag text={"programming"}/>
				<Tag text={"science"}/>
				<Tag text={"family"}/>
				<Tag text={"social network"}/>
				<Tag text={"math"}/>
				<Tag text={"sport"}/>
				<Tag text={"farming"}/>
				<Tag text={"farming"}/>
				<Tag text={"farming"}/>
				<Tag text={"farming"}/>
				<Tag text={"farming"}/>
				<Tag text={"farming"}/>
				<Tag text={"farming"}/>

			</div>
		</div>
		
	)
}

export default TagsBox
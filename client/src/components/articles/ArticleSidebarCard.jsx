



const ArticleSidebarCard = () => {

    const title = "sdfs sd sdf s sd sd s sdf sdf sdf  fgh fgh fhhhh"

	const shrinkText = (text , position) => {
		return text.substring(0, position)
	}
	return (
		<div className=" overflow-hidden mb-2" style={{maxHeight:"150px"}}>
			<div className="outer bg-cover  flex flex-col  border-4  border-blue-300  "
				  >
					<div className="inner-overlay text-white">
						<div className=" flex flex-row  basis-6   " 
					     style={{}}>
						<div className="">
							{  shrinkText(title,39) }....
						</div>
						</div>
						<div>
							title
						</div>
						<div>
							name
						</div>
					</div>
			</div>
		</div>	
	)
}

export default ArticleSidebarCard;
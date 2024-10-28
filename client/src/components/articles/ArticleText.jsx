
const ArticleText = ({title}) => {

	return (
		<div className="xs:p-3 md:p-2">
			<div className="text-justify xs:text-[22px] sm:text-[23px] md:text-[25px] lg:text-[27px]" >
				{title}
			</div>
		</div>
	)
} 

export default ArticleText;
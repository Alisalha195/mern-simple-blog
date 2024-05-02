

const Tag = ({text}) => {


	return (
		
		(text!=null) 
		?  <span  className="btn mx-1 my-1 xs:pb-[4px] md:pb-1 md:pt-[2px] px-2 bg-gray-500 text-gray-200
							xs:[border-radius:16px] xmd:[border-radius:20px]
							xs:text-[20px] sm:text-[22px] xmd:text-[26px]
		                 " 
		>
			  #{text}
		   </span>
		
		:   <span  className="btn mx-1 my-1 pb-1 px-2 bg-gray-500 text-gray-200" >
				#any Tag
			</span>
		
	)
}

export default Tag
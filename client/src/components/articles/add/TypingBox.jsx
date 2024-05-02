

const TypingBox = ({title , setTitle}) => {

	return (
		<div className="flex flex-col">
			
			{/* <div className=""> */}
			{/* 	tools */}
			{/* </div> */}

			<div className="lg:[width:100%] [height:700px]" >
				<textarea placeholder="Title" wrap="off" 
				    className="xs:p-2 lg:p-3 xs:text-[26px] lg:text-[31px] text-gray-600 [outline:none] [resize:none]
				               [border:1px_solid_#ddd] [width:100%] [height:100%] " 
	                value={title}
	                onChange={(e)=>setTitle(e.target.value)}
				>
				</textarea>
			</div>	


		</div>
	)
}
export default TypingBox
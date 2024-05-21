

const TypingBox = ({title , setTitle,content , setContent }) => {

	return (
		<div className=" mb-[180px]">
			
			{/* <div className=""> */}
			{/* 	tools */}
			{/* </div> */}

			<div className="lg:[width:100%] [height:600px]" >
				<div className="flex flex-col [width:100%] mb-2">
				    <span className="xs:text-[26px] sm:text-[30px] lg:text-[36px] text-[#666]">title</span>
					<input className="pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 [width:100%] text-[24px] [border:1px_solid_#ddd] [outline:none] [border-radius:7px]"
						placeholder="Title"
						type="text"
						value={title}
		                onChange={(e)=>setTitle(e.target.value)}
					/>
				</div>
				<span className="xs:text-[26px] sm:text-[30px] lg:text-[36px] text-[#666]">content</span>
				<textarea placeholder="text" wrap="off" 
				    className="xs:p-2 lg:p-3 xs:text-[26px] lg:text-[31px] text-gray-600 [outline:none] [resize:none]
				               [border:1px_solid_#ddd] [width:100%] [height:100%] " 
	                value={content}
	                onChange={(e)=>setContent(e.target.value)}
				>
				</textarea>
			</div>	


		</div>
	)
}
export default TypingBox
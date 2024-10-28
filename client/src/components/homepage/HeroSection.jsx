
const HeroSection = () => {
	return (
		<div className="hero-section flex flex-col justify-between text-center xs:p-2  lg:p-6 mb-2 bg-cover bg-opacity-200 [border:1px_solid_#444] xmd:[min-height:100vh] " >
			<div className="text-center mx-auto sm:my-3 lg:my-6 xs:[max-width:80%] xmd:[max-width:70%]">
				<h2 className="text-gray-100  [font-weight:500] xs:text-[34px]  sm:text-[40px] xmd:text-[66px]">
					Here You Can Write Your Thought And Share It With Public 
				</h2>
				<div className="flex flex-row justify-center">
					<p className="text-center [max-width:60%] text-gray-300 mt-8 xs:text-[20px] xmd:text-[30px]"
					>

					we give you oppertunity to write articles about various subjects
				</p>
				</div>
			</div>
			<div className=" xs:my-9 xmd:my-9 xs:p-1 xmd:p-2" >  
				<span className="btn xs:px-1 xmd:px-3 xs:py-1 xmd:py-2 xs:text-[22px] xmd:text-[32px] xs:[font-weight:400] xmd:[font-weight:500] rounded text-gray-100 bg-black border-2 border-gray-600 hover:bg-gray-900">
					Get Started
				</span>
			</div>
		</div>
	)
}

export default HeroSection
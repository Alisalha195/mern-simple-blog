
import {useNavigate} from 'react-router-dom' 


const Logo = () => {
	
	const navigate = useNavigate()
	const logoLink = {
	    link : () => {
	      navigate("/")
	    }
	}

	const navigateTo = () => {
		 navigate("/")
	}
	return (
		<div  onClick={logoLink.link}>
			<span className="lg:text-[35px] text-[28px] [border-radius:30px_8px] px-2 shadow-md shadow-gray-500 btn text-gray-200 text-xl font-bold"
			
			>
				<span className="italic lg:text-[40px] text-[32px] [text-shadow:3px_3px_0_#666]">A</span>
				-Blog
			</span>	
		</div>
		
	)
}
export default Logo
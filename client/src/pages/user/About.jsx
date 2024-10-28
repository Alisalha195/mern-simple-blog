import {useEffect} from "react"
import {useSelector} from 'react-redux';
import {useNavigate } from 'react-router-dom'


const About = () => {

// 	const navigate = useNavigate();
// 	const{currentUser}=useSelector(state=>state.auth);
// 
// 	useEffect(()=> {
//         if(!currentUser)
//             navigate("/login")
//     },[currentUser])

	return (
		<div className="flex flex-col">
			<div className="mt-4 flex flex-row justify-center">
				this is about page
			</div>
		</div>	
	)
}

export default About
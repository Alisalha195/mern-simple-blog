
import {useState , useEffect} from 'react';



const LoadingBox = () => {
	const [loading , setLoading] = useState(true);
	
	 
	useEffect(()=> {
		setTimeout(()=> {
			setLoading(false)
		}, 1500)

	} , []);

	const loadingProps = {
		loading : loading ,
		setLoading : setLoading
	}
	return loadingProps
}

export default LoadingBox;
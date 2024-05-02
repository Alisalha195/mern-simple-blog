
import {useState , useEffect} from 'react';



const LoadingBox = () => {
	const [loading , setLoading] = useState(true);
	
	 
	useEffect(()=> {
		setTimeout(()=> {
			setLoading(false)
		}, 2200)

	} , []);

	const loadingProps = {
		loading : loading ,
		setLoading : setLoading
	}
	return loadingProps
}

export default LoadingBox;
import Image from '../../assets/images/backgroundhero.jpg';

const UserProfileImage = ({size , rounded}) => {

	
	const getSize = (size) => {

		if(size == 'full')
			return "100%"
		else if(size == 'xs')
			return "42px"
		else if(size == 'sm')
			return "50px"
		else if (size == 'md')
			return "65px"
		else if (size == 'lg')
			return "75px"
		else if((typeof(size)== "number" ) && (size < 800))
			return `${size}px`
	}

	const isRounded = (rounded)=> {
		
		if(rounded)
			return "50%"
		else 
			return"5px"
	} 

	return (
		<div className="flex ">
			<div className="bg-gray-900" 
			      style={{borderRadius:isRounded(rounded), width:getSize(size) , height:getSize(size)}}>
				<img src={Image}
				style={{width:"100%" , height:"100%" ,borderRadius:isRounded(rounded) }}/>
			</div>
		</div>	
	)
}
export default UserProfileImage
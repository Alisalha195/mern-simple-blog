
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import UserProfileImage from '../user/UserProfileImage'

const HeaderDropDownList = ({openMenu, setOpenMenu , logedin,currentUser , headerList, handleLogout}) => {

	  const navigate = useNavigate()

		// console.log('currentUser in header : ',currentUser)
		// console.log('LOGED ? ',logedin)
	  const handleMouseOut = () => {
      if(openMenu)
	      setOpenMenu(false)
	  }

	  const getShortUsername = (username) => {
	  	return `${username.slice(0,6)}...`
	  } 

	useEffect(()=>{
		if(currentUser)
			logedin = true;
		else
			logedin = false;
	},[logedin,currentUser]);
	
	return (
		<div className={openMenu ? 
                                   "flex [min-width:200px]  py-1 px-2 [border-radius:6px] [position:absolute] [top:40px] bg-[#efefef] [border:2px_solid_#aaa]" 
                                 : "hidden"}
            onMouseLeave={handleMouseOut}  
        >
          <div className="flex flex-col	 flex-nowrap">
            {
              currentUser 
                ? 
                    <div className="[border-bottom:1px_solid_#ccc] mb-2">
                    	<div className={logedin ? "btn flex flex-row justify-center" : "hidden"}>
	                      < UserProfileImage size="xs" rounded={true} bordered={true}/>
	                      <span className="text-[#444] text-[26px] ml-1 font-bold">
	                      	{getShortUsername (currentUser.username)}
	                      </span>
	                    </div>
	                    <div className=' text-[#444] hover:text-[#666] my-1'>
	                    	<span className='btn px-1'
															onClick={handleLogout}
	                    	>
		                    	logout
	                    	</span>
	                    </div>
                    </div>


			    :   <div className=" flex flex-col pb-1 [border-bottom:1px_solid_#fff]">
								<span className="mb-1 btn text-gray-700 font-bold [border-radius:5px] hover:pl-[5px] transition-* duration-150"
									onClick={()=>navigate("/signup")}
								>
									Sign up
								</span>
								<span className="mb-1 btn text-gray-700 font-bold [border-radius:5px] hover:pl-[5px] transition-* duration-150"
									onClick={()=>navigate("/login")}
								>
									Log in
								</span>
							</div>

            }

            {

                      headerList.map((item, index) =>(
                        <div key={index} 
                              className="mb-1 flex flex-row flex-nowrap btn "
                              onClick={item.link}
                        >
                          <span className="text-[27px] text-[#353535] flex  hover:pl-[5px] transition-* duration-150">{item.title.toUpperCase()}</span>
                        </div>
                      ) )
			}

          </div>
        </div>	
	)
	
}

export default HeaderDropDownList
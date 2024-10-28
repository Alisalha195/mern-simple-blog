
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import GoogleIcon from "../../../assets/google.svg"


const SignupWithAccounts = () => {

	return (
		<div className="flex flex-col xs:text-center lg:text-left xs:my-[40px] lg:basis-4/12 xs:basis-full">
            
            <div>
              <span className="text-md text-gray-700 ">
                or signup with another account 
              </span>
            </div>

            {/* github */}
            <div className="flex flex-row xs:justify-center lg:justify-start  mt-7 ">

              
              <div className="btn text-white pl-3 pr-3 bg-gray-800 flex  py-1
                              [border-radius:28px] [border:2px_solid_#444] xs:text-[24px] xl:text-[28px]"
                    
              >  
                <span>sign up with Github</span>
                <span className="[width:32px] ml-1  flex flex-col justify-center">
                  <FaGithub className="" />
                </span>
              </div>

            </div>

            {/* goolge */}
            <div className="flex flex-row xs:justify-center lg:justify-start mt-3 ">

              
              <div className="btn text-gray-700 px-3 bg-gray-100 flex  py-1 
                              [border-radius:28px] [border:1px_solid_#999] xs:text-[24px] xl:text-[28px]"
                    
              >  
                <span>sign up with Google</span>
                <span className="xs:[width:25px] lg:[width:30px] ml-1 flex flex-col justify-center">
                  <img src={GoogleIcon} className="[width:100%]"/>
                {/* <FaGoogle className="text-red-500"/> */}
                </span>
              </div>

            </div>

        </div>	
	)
}

export default SignupWithAccounts
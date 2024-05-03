  import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import SignupWithAccounts from "../../components/user/auth/SignupWithAccounts"

const SignUp = ()=>  {
  
  const log = console.log;
  const navigate = useNavigate();  
  
  const [formData , setFormData] = useState({});
  
  const [loading , setLoading] = useState(false);
  
  const [error , setError]= useState(null);
  
  const handleChange = (e)=> {
    setFormData({
      ...formData , 
      [e.target.id] : e.target.value
    });
    log(formData)
  }

  const handleSignup= async() => {
    
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/auth/signup" , {
        method: "POST" ,
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
        
      });
      const data = res.json();
      
      if(data.success === false) {
        setLoading(false);
        setError(data.message);
         navigate('/error');
        return;
      }
      
      setLoading(false);
      setError(null);
      navigate('/login');

    } catch (error){
      setLoading(false);
      setError(error.message);
    }
    
  }


  return (
  
    <div className="xs:mb-[120px] sm:mb-[20px]" >
      <div className="flex flex-col p-2">

        <div>
          <span className=" font-bold text-gray-800 xs:text-[32px] sm:text-[38px] md:text-[42px]"
                
          >
          Sign up 
          </span>
        </div>

        <div className="flex xs:flex-col lg:flex-row">

          {/* Left */}
          <div className="  lg:basis-8/12 xs:basis-full justify-center">
            
            <div className="flex flex-col  xs:px-4 lg:px-3 pt-2  " >

              {/* username */}
              <div className="flex flex-col">
                <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-700">
                  username
                </div>
                <div className="">
                <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:90%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
                  type="text" 
                  id="username"
                  onChange = {handleChange}
                  
                          />

                  {/* Error Box */}
                  <div>{error && <p>{error}</p>}</div>
                </div>
              </div>

              {/* email */}
              <div className="flex flex-col">
                <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-700">
                  email
                </div>
                <div className="">
                <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:90%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
                  type="email" 
                  id="email"
                  onChange = {handleChange}

                          />

                  {/* Error Box */}
                  <div>{error && <p>{error}</p>}</div>
                </div>
              </div>

              {/* password */}
              <div className="flex flex-col mt-2">
                <div className="  leading-7 text-gray-700 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
                  password
                </div>
                <div className="basis-8/12">
                  <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:90%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
                  type="password"
                  id="password"
                  onChange = {handleChange} 
                       />

                 {/* Error Box */}
                  <div>{error && <p>{error}</p>}</div>
                </div>
              </div>

              <div className="flex mt-5 lg:[width:90%] xs:[width:100%] [border-radius:7px]" 
              >

                <div className="btn [width:100%] [border-radius:7px] text-center hover:bg-blue-700 bg-blue-800 text-white xs:text-[28px] sm:text-[32px] md:text-[36px] xs:py-[2px]" 
                  onClick = {handleSignup}
                >
                  sign up
                </div>

              </div>
            </div>
          </div>

          < SignupWithAccounts />
          
        </div>
      </div>
    </div>
  );
}

export default  SignUp
import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from "../../components/public/Loading";
import LoadingBox from "../../hooks/useLoading"
import {useDispatch,useSelector} from 'react-redux';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import SignupWithAccounts from "../../components/user/auth/SignupWithAccounts"
import {loginUserAsync, reset} from "../../redux/AuthSlice.js";


const Login = ()=> {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentUser, error,isLoading, isSuccess} = useSelector(state => state.auth) ;

  const[errorMessage, setErrorMessage] = useState("");

  const [formData , setFormData] = useState({});

  const loadingProps = LoadingBox();
  const loading = loadingProps.loading; 
  const setLoading = loadingProps.setLoading;
  
  useEffect(()=> {

    if(error) {
      setErrorMessage(error.message);
    }

    if(currentUser)
      navigate("/dashboard");

    setTimeout(()=> {
      dispatch(reset())
    }, 1500)
    

  }, [dispatch, navigate, currentUser, error, isLoading])

  const handleChange = (e)=> {
    setFormData({
      ...formData , 
      [e.target.id] : e.target.value
    });
    // log(formData)
  }

  const handleLogin = () => {
    // console.log("proccessing...");
    console.log("formData",formData)
    dispatch(loginUserAsync(formData));
    // setLoading(true);
    
  }

  if(loading) {
      return <Loading />
  }

  return (
   
    <div className="xs:mb-[120px] sm:mb-[20px]">
      <div className="flex flex-col p-2">

        <div>
          <span className=" font-bold text-gray-800 xs:text-[32px] sm:text-[38px] md:text-[42px]"
                
          >
          Log in
          </span>
        </div>

        <div className="flex xs:flex-col lg:flex-row">

          {/* Left */}
          <div className="  lg:basis-8/12 xs:basis-full justify-center">
            
            <div className="flex flex-col  xs:px-4 lg:px-3 pt-2  " >

              {/* email */}
              <div className="flex flex-col">
                <div className=" xs:text-[24px] sm:text-[28px] lg:text-[30px] leading-7 text-gray-700">
                  email
                </div>
                <div className="">
                <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:90%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
                  required
                  type="email" 
                  id="email"
                  onChange = {handleChange} 
                          />

                   
                </div>
              </div>

              {/* password */}
              <div className="flex flex-col mt-2">
                <div className="  leading-7 text-gray-700 xs:text-[24px] sm:text-[28px] lg:text-[30px] ">
                  password
                </div>
                <div className="basis-8/12">
                  <input className=" pl-2 py-1 border-t-gray-900 focus:text-gray-900 text-gray-600 lg:[width:90%] xs:[width:100%] text-[24px] [border:1px_solid_#aaa] [outline:none] [border-radius:7px]" 
                    required
                    type="password"
                    id="password"
                    onChange = {handleChange}  
                       />

                 
                </div>
              </div>

              <div className="flex mt-5 lg:[width:90%] xs:[width:100%] [border-radius:7px]" 
              >

                <div className="btn [width:100%] [border-radius:7px] text-center hover:bg-blue-700 bg-blue-800 text-white xs:text-[28px] sm:text-[32px] md:text-[36px] xs:py-[2px]" 

                onClick = {handleLogin}
                >
                  {isLoading ?"Loading.." :"log in"}
                </div>

              </div>

              {/* Error Box */}
              <div>{errorMessage ? <p className=" pt-[20px] text-[#aa0000]">{errorMessage}</p> : <p></p>}</div>

            </div>
          </div>

          < SignupWithAccounts />
          
        </div>
      </div>
    </div>
  );
}
export default  Login
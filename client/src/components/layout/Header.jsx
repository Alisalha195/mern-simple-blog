
import {useState} from 'react'
import {useNavigate} from 'react-router-dom' 
import {Navigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
// import {  signOut  } from 'firebase/auth';
// import { auth } from '../../firebase/firebase';

import { TiThMenu } from "react-icons/ti";

//-----------------------------------------------------------------------

import Logo from "../public/Logo"

import HeaderDropDownList from "./HeaderDropDownList"

const Header = () => {

  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false)
  
  const {currentUser, error,isLoading, isSuccess} = useSelector(state => state.user) ;

  
  const navigate = useNavigate()
  
  const navigateTo = (link) => {
    return (<Navigate to={link} />)
  } 
  const logedin = false;

  
  const headerList = [
    {
      title: "home" ,
      link : () => {
        setOpenMenu(false)
        navigate("/")
      }
    },
    {
      title: "articles" ,
      link : () => {
        setOpenMenu(false)
        navigate("/articles")
      }
      
    },
    {
      title: "about us" ,
       link : () => {
        setOpenMenu(false)
        navigate("/about")
      }
      
    },
  ]

  const handleMouseOver = () => {
      if(!openMenu)
        setOpenMenu(true)
  }

  const handleMenuclick = () => {
    if(openMenu)
      setOpenMenu(false)
    else
      setOpenMenu(true)
    
  }
  // const userID =  auth.currentUser?.uid 


	return ( 
    
    <div className=" flex flex-row p-2 bg-gray-800">

      <div className="xmd:basis-2/12 basis-10/12">
        <Logo  />
      </div>

      {/* Elements in large screens */}
      <div className="basis-10/12 xmd:flex flex-row hidden ">
        <div className=" leading-8 pl-1 basis-9/12">  
        {
          headerList.map(element => {
            return (
              <span key={element.title} 
                    className="p-1 btn mr-2 xmd:mr-3 xmd:text-[22px] text-[18px] xl:text-[26px]
                                  text-gray-100"
                    onClick={element.link   } >
                
                {element.title.toUpperCase()}
              </span> )
          })
        }
        </div>

        <div className="flex flex-col justify-center basis-3/12 leading-7">

          
          { currentUser 
            ? <div className={currentUser ? "flex flex-row" : "hidden"}>
                <span>p</span>
              </div> 
            :
            <div className={logedin ? "hidden ": "flex flex-row [max-height:70%]" }>

              <span className="flex flex-col  justify-center btn xmd:px-[2px] lg:py-1 lg:px-1  xmd:mr-1 xmd:text-[22px] text-white xl:text-[26px] 
                             [border-radius:5px] [border:1px_solid_#fff]"
                  
                  onClick={()=>navigate("/login")}
              >
                Log in
              </span>

              <span className="flex flex-col justify-center flex-nowrap btn xmd:px-[2px] lg:py-1 lg:px-1 bg-gray-300 xl:text-[26px] xmd:text-[22px] text-gray-700 font-bold [border-radius:5px] 
                              [border:1px_solid_#aaa]"
                    
                    onClick={()=>navigate("/signup")}
              >
                Sign up
              </span>
            </div>
          }
          {/* user icon button */}
          <div className={logedin ? "flex flex-row" : "hidden"}>
            <span>p</span>
          </div>
          {/* <span>icon</span> */}
        </div>
      </div>


      {/* Elements in small screens */}
      <div className="xmd:hidden flex flex-row basis-2/12 justify-end mr-1
                        [position:relative]"
            onMouseLeave={()=> setOpenMenu(false)}
      >
        <span className="btn flex flex-col justify-center text-gray-100"
              onClick={handleMenuclick}
              onMouseOver={ handleMouseOver}

        >
          <TiThMenu />
        </span>

        {/* Drop Down List */}   
        < HeaderDropDownList 
              openMenu = {openMenu}
              setOpenMenu = {setOpenMenu}
              logedin={currentUser?true:false}
              currentUser={currentUser}
              headerList={headerList}
        />
      </div>
    </div>

  );
}
export default Header
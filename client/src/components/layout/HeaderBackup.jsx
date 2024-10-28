


import {useState} from 'react'
import {useNavigate} from 'react-router-dom' 
import {  signOut  } from 'firebase/auth';
import { auth } from '../../firebase/firebase';


import { Container, Box, AppBar ,Button ,Tooltip, Avatar, Toolbar , Typography ,IconButton ,Switch ,MenuItem ,Menu ,Link, FormControlLabel ,FormControl ,FormGroup } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

//-----------------------------------------------------------------------

import Logo from "../public/Logo"

// import Logo from '../../../assets/Logo'
const Header = () => {

  const testing = true ;
  // const userID =  auth.currentUser?.uid 

	const navigate = useNavigate()

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	
  const pages = [
    { title : "companies" ,
      method : () => { 
        handleCloseNavMenu()
        navigate("/companies")
      }
    }  ,
    { title : "policy" ,
      method : () => { 
        handleCloseNavMenu()
        navigate("/policy")
      }
    }  ,
    { title : "blog" ,
      method : () => { 
        handleCloseNavMenu()
        navigate("/blog")
      }
    }
  ]
	const settings = [
    { title : "Profile" ,
      method : () => handleProfileClick()
    }  ,
    { title : "Account" ,
      method : () => handleAccountClick()
    }  ,
    { title : "Dashboard" ,
      method : () => handleDashboardNavigate()
    }  ,
    { title : "Logout" ,
      method : () => handleLogout()
    }  
  ]

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
    
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

  const handleProfileClick = () => {
    handleCloseUserMenu()
    navigate(`/profile/${userID}`)
    
  }
	
  const handleAccountClick = () => {
    handleCloseUserMenu()
    navigate(`/account/${userID}`)
    
  }


  const handleLogout = async () => {
    handleCloseUserMenu()
    localStorage.setItem("rememberUserLogedin", false)
    localStorage.setItem("userID", "")
    console.log("user is : ",localStorage.getItem("userID"))
    await signOut(auth)
    .then(()=>{
      console.log('signed out !')
    })
    .catch((err)=>{
      console.log(err)
    })

    navigate("/login")
  }
  const handleDashboardNavigate = () => {
    handleCloseUserMenu()
    
    navigate(`/B-owner/${userID}/dashboard`)
  }
	
	return ( 
    testing ?
    <div>
      <Logo />
    </div>
    :
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" sx={{background:"#004d7a"}} mt={0}>
        <Toolbar >
          {/* <LogoIcon /> */}
          
          <Box  sx={{ flexGrow: 2,  display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu

              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title}   onClick={page.method} >
                  <Typography textAlign="center"  >{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Logo /> */}
          <FormGroup>
			
		  </FormGroup>
          <Box 
	          justifyContent="right" 
	          mr={20}
	          sx={{ flexGrow: 1, 

	                display: { xs: 'none', md: 'flex' } 
	          }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={page.method}
                sx={{ my: 2, color: 'white', display: 'block' , mr:4 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          { auth &&
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                
                <MenuItem key={setting.title} 
                          onClick = { setting.method}

                >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header
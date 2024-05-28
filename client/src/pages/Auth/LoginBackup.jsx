import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// import { auth } from '../../../../firebase/firebase';
// import {  signInWithEmailAndPassword   } from 'firebase/auth';
// 
// import {Avatar, Button, CssBaseline, TextField,  FormControlLabel , Checkbox, Link, Grid, Box, Typography, Container, } from '@mui/material/'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

const Login = ({user})=> {

//   const navigate = useNavigate();
// 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
// 
//   const [rememberMe, setRememberMe] = useState(localStorage.getItem("rememberMe")||false);
// 
//   const [authUser, setAuthUser] = useState("")
// 
//   const handleSubmit = (event) => {
//     event.preventDefault();
// 
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//           
//           const user = userCredential.user;
//           setAuthUser(user.uid)
//           localStorage.setItem("userID", user.uid)
//           
//           navigate(`/B-owner/${user.uid}/dashboard`)
//           
//       })
//       .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           alert(errorMessage)
//           console.log(errorCode, errorMessage)
//       });
//   };
// 
//   const handleRememberMeClick = (event) => {
//     setRememberMe(event.target.checked)
//     localStorage.setItem("rememberUserLogedin", rememberMe)
//   }

  const handleLogin2 = async() => {
    
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/auth/login" , {
        method: "POST" ,
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData)
        
      });
      const data = await res.json();
      log(data)
      if(data.success === false) {
        setLoading(false);
        setError(data.message);
         // navigate('/error');
        return;
      }
      
      setLoading(false);
      setError(null);
      navigate('/home');

    } catch (error){
      setLoading(false);
      setError(error.message);
    }
    
  }

  return (
    
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Log in
    //       </Typography>
    //       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           label="Email Address"
    //           name="email"
    //           autoComplete="email"
    //           autoFocus
    //           onChange={(e)=>setEmail(e.target.value)}
    //         />
    //         <TextField
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           label="Password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //           onChange={(e)=>setPassword(e.target.value)}
    //         />
    //         <FormControlLabel
    //           control={
    //             <Checkbox value={rememberMe} 
    //                       color="primary" 
    //                       onChange={ (e) => handleRememberMeClick(e) }
    //             />
    //           }
    //           label="Remember me"
    //         />
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2 }}
    //         >
    //           Log In
    //         </Button>
    //         <Grid container>
    //           <Grid item xs>
    //             <Link href="#" variant="body2">
    //               Forgot password?
    //             </Link>
    //           </Grid>
    //           <Grid item>
    //             <Link href="/signup" variant="body2">
    //               {"Don't have an account? Sign Up"}
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //    
    //   </Container>
    // </ThemeProvider>

    <h2>Login..</h2>

    
  );
}
export default  Login
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import {getDocs, collection,  deleteDoc, deleteField ,query , where, doc , setDoc , addDoc, updateDoc , serverTimestamp} from "firebase/firestore"
// import { auth, db } from '../../../../firebase/firebase';
// 
// 
// import { Avatar , Button ,CssBaseline ,TextField ,FormControlLabel, Checkbox, Link ,Grid ,Box , Typography , Container , FormControl ,Select ,InputLabel , MenuItem     } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const defaultTheme = createTheme();

// collections Refs
// const bOwnersCollectionRef = collection(db, "buisnessOwners")
// const employeesCollectionRef = collection(db, "Employees")

const SignUp = ()=>  {

  const navigate = useNavigate();  

//   const [nationalID, setNationalID] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [userType, setUserType] = useState(1);  
// 
//   const userTypes = {BOwner : 1 , Employee: 2}
//   
// 
//   const handleUserTypeChange = (event) => {
//     setUserType(event.target.value)
//   }
//   const saveUserInfo = async (user) => {
// 
//     userType == 1 ?  saveBOwnerInfo(user) :  saveEmployeeInfo(user)
// 
//   }
// 
//   const saveBOwnerInfo = async (user) => {
// 
//     const newbOwner = doc(bOwnersCollectionRef)
//     await setDoc(newbOwner, {
// 
//       uID : user.uid ,
//       nationalID: nationalID ,
//       firstName : firstName ,
//       lastName : lastName ,
//       email : email ,
//       password: password ,
//       
//       // rememberMe : rememberMe ,
//     })
//   } 
//   const saveEmployeeInfo = async (user) => {
//     
//     const newEmployee = doc(employeesCollectionRef)
//     await setDoc(newEmployee, {
// 
//       uID : user.uid ,
//       firstName : firstName ,
//       lastName : lastName ,
//       email : email ,
//       
//     })
//   } 
//   const handleSubmit = async (event) => {
//      event.preventDefault();
// 
//      await createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             
//             const user = userCredential.user;
//             
//             saveUserInfo(user)
// 
//             navigate("/login")
//             
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//         });
//   };
// 
//   const rememberUser = (event) => {
//     setRememberMe(event.target.checked)
//     localStorage.setItem("rememberMe" , rememberMe)
//     
//   }

  

  return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                   <TextField
//                     autoComplete="given-name"
//                     name="nationalID"
//                     required
//                     fullWidth
//                     id="nationalID"
//                     label="National ID"
//                     type="number"
//                     autoFocus
//                     value={nationalID}
//                     onChange={(e) => {setNationalID(e.target.value)}}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     autoComplete="given-name"
//                     name="firstName"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                     value={firstName}
//                     onChange={(e) => {setFirstName(e.target.value)}}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="family-name"
//                     value={lastName}
//                     onChange={(e) => {setLastName(e.target.value)}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type="password"
//                     id="password"
//                     autoComplete="new-password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <FormControl fullWidth>
//                     <InputLabel id="userType">your role</InputLabel>
//                     <Select
//                       labelId="userType"
//                       id="simple-select"
//                       value={userType}
//                       label="User Type"
//                       onChange={handleUserTypeChange} 
//                       style={{color: "#555"}}
//                       
//                     >
//                       <MenuItem style={{color: "#666"}} 
//                                 value={userTypes.BOwner}>Buisness Owner
//                       </MenuItem>
//                       <MenuItem style={{color: "#666"}}  
//                                 value={userTypes.Employee}>Employee
//                       </MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
// 
//                 {/* <Grid item xs={12}> */}
//                 {/*   <FormControlLabel */}
//                 {/*     control={<Checkbox value="allowExtraEmails" color="primary" />} */}
//                 {/*     label="I want to receive inspiration, marketing promotions and updates via email." */}
//                 {/*   /> */}
//                 {/* </Grid> */}
//             </Grid>
//             <FormControlLabel
//               control={
//                 <Checkbox value={rememberMe} 
//                           color="primary" 
//                           onChange={ (e) => rememberUser(e) }
//                 />
//               }
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/login" variant="body2">
//                   Already have an account? Log in
//                 </Link>
//               </Grid>
//             </Grid>
// 
//             
//           </Box>
//         </Box>
//         
//       </Container>
//     </ThemeProvider>

    <h2>Signup</h2>
  );
}

export default  SignUp
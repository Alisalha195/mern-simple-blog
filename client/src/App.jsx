
// userid : 66340bd85f860a4ff0cddf20

import './App.css'
import {useState, useEffect, Suspense,lazy} from 'react';
import {useNavigate ,Navigate, Routes , Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
// import { auth} from './firebase/firebase';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import useBownerDashboardContext from "./context/BownerDashboardContext"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Homepage from './user/pages/Homepage'
import Login from './user/Auth/Login'
import Signup from './user/Auth/Signup'
import Profile from './user/pages/Profile'  
import About from './user/pages/About'
import Dashboard from './user/pages/Dashboard'

import Articles from './user/pages/Articles/Articles'
import Article from './user/pages/Articles/Article'
import AddArticle from './user/pages/Articles/AddArticle'
import EditArticle from './user/pages/Articles/EditArticle'
// import DeleteArticle from './user/pages/Articles/DeleteArticle'



// const BownerDashboard =  lazy(()=> import('./user/buisness_owner/pages/Dashboard/BownerDashboard')) 

function App() {
  
  // const {authUser} = true
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentUser, isSuccess} = useSelector(state => state.auth) ;

  // const[isLoading, setIsLoading] = useState(true) ;
  // const[backendData, setBackendData] = useState([""]) ;

//   useEffect(()=>{
// 
//     // const fetchedData = fetch("/api");
//     // const responseData = response.json();
//     // const dataArray = res 
//     const getData = async () => {
//       await fetch("/api/articles/").then(
//         response =>  response.json()
//       ).then(
//         data => setBackendData(data)
//         // data => console.log(data)
//       )
//     }
// 
//     getData()
//   },[])


  return (
    <div className="app ">
      
        <Header />

        
        <Routes>  

          {/* <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/> */}

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login /> }/>
          <Route path="/signup" element={<Signup /> }/>

          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
          
          <Route path="/articles/add" element={<AddArticle />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
          {/* <Route path="/articles/delete/:id" element={<DeleteArticle />} /> */}

          {/*
          <Route path="/profile/:id" element={currentUser ? <Profile /> : <Navigate to='/login' />} />
          */}
          <Route path="/profile/:id" element={ <Profile /> } />

          <Route path="/about" element={<About />} />
          {/* <Route path="/home" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/> */}
            
           {/* <Route path="/dashboard" element={<Dashboard /> } /> */}

           <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to='/login' />} />

          {/* <Route path="/login" element={authUser ?<Navigate to='/' /> :<Login /> }/> */}
           
          
          {/* <Route path="/user/:id" element={<User /> }/> */}
        </Routes>

        
        <Footer />
      
    </div>
  )
}

export default App

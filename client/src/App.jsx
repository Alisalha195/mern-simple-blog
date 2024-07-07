
// userid : 66340bd85f860a4ff0cddf20

import './App.css'
import {useState, useEffect, Suspense,lazy} from 'react';
import {useNavigate ,Navigate, Routes , Route} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
// import { auth} from './firebase/firebase';
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import useBownerDashboardContext from "./context/BownerDashboardContext"
import AdminDashboard from "./admin/pages/AdminDashboard"

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Homepage from './pages/user/Homepage'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Profile from './pages/user/Profile'  
import EditProfile from './pages/user/EditProfile' 
import About from './pages/user/About'
import Dashboard from './pages/user/Dashboard'

import Articles from './pages/user/Articles/Articles'
import Article from './pages/user/Articles/Article'
import AddArticle from './pages/user/Articles/AddArticle'
import EditArticle from './pages/user/Articles/EditArticle'
import NotFound from './pages/NotFound'
// import DeleteArticle from './user/pages/Articles/DeleteArticle'



// const BownerDashboard =  lazy(()=> import('./user/buisness_owner/pages/Dashboard/BownerDashboard')) 

function App() {
  
  // const {authUser} = true
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentUser, isSuccess} = useSelector(state => state.auth) ;

  return (
    <div className="app ">  
      
        <Header  />

        
        <Routes>  

          <Route path="/admin" element={currentUser 
                                ? 
                                    currentUser.isAdmin 
                                    ?
                                        <AdminDashboard />
                                    :
                                        <Navigate to='/dashboard' />
                                :
                                    <Navigate to='/login' />
                              } 
          />
          

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

          <Route path="/profile/edit/:id" element={ <EditProfile /> } />

          <Route path="/about" element={<About />} />

          {/* <Route path="/articles/search/:searchText" element={<About />} /> */}
          {/* <Route path="/home" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/> */}
            
           {/* <Route path="/dashboard" element={<Dashboard /> } /> */}

           <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to='/login' />} />

           <Route path="/notfound" element={<NotFound />} />

          
        </Routes>

        
        <Footer />
    
      
    </div>
  )
}

export default App

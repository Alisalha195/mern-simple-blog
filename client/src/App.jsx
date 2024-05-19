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

import Articles from './user/pages/Articles/Articles'
import Article from './user/pages/Articles/Article'
import AddArticle from './user/pages/Articles/AddArticle'
import EditArticle from './user/pages/Articles/EditArticle'
import DeleteArticle from './user/pages/Articles/DeleteArticle'



// const BownerDashboard =  lazy(()=> import('./user/buisness_owner/pages/Dashboard/BownerDashboard')) 

function App() {
  
  // const {authUser} = true
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentUser, isSuccess} = useSelector(state => state.user) ;

  const[isLoading, setIsLoading] = useState(true) ;
  // const[backendData, setBackendData] = useState([""]) ;

  useEffect(()=>{

    // const fetchedData = fetch("/api");
    // const responseData = response.json();
    // const dataArray = res 
    const getData = async () => {
      await fetch("/api/articles/").then(
        response =>  response.json()
      ).then(
        data => setBackendData(data)
        // data => console.log(data)
      )
    }

    getData()
  },[])

  const authUser = false
  const testing = false
  // console.log("backendData : " , backendData)

  return (
    <div className="app ">
      
        <Header />

        {(testing) ? 

        <div>{backendData.map((article , index) => (
           <p key={index}>{article.title}</p>
           ))}
        </div>
        : 
        <Routes>  

          {/* <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/> */}

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login /> }/>
          <Route path="/signup" element={<Signup /> }/>

          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<Article />} />
          
          <Route path="/articles/add" element={<AddArticle />} />
          <Route path="/articles/edit" element={<EditArticle />} />
          <Route path="/articles/delete" element={<DeleteArticle />} />

          <Route path="/profile/" element={currentUser ? <Profile /> : <Navigate to='/login' />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="/home" element={authUser ? <HomePage /> : <Navigate to='/login' /> }/> */}
          {/* <Route path="/admin" element={<AdminDashboard /> }/> */}

          {/* <Route path="/login" element={authUser ?<Navigate to='/' /> :<Login /> }/> */}
           
          
          {/* <Route path="/user/:id" element={<User /> }/> */}
        </Routes>

        }
        <Footer />
      
    </div>
  )
}

export default App

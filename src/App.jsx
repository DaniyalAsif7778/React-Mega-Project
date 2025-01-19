 import { useState,useEffect } from "react";
 import  authServices from "./Appwrite/auth.js";
 import {useDispatch} from "react-redux";
 import {login,logout} from "./store/authslice";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router";
  
function App() {
 const [loading,setLoading]= useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    authServices.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{

      dispatch(logout());
      }
      
    })
    .finally(()=>{
      setLoading(false);  
    })
  },[dispatch]);

 
  return loading ?  (<div className="   h-screen  flex item-center justify-center bg-gray-400">
     <h1>Loading...</h1>
       </div>) : (
       <div className="w-full   flex items-center justify-center flex-col" > 
            <Header/>
            <main>
              Todo: <Outlet/>
            </main>
            <Footer/>
       </div>
  ); 
}

export default App

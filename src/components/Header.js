

  import React from 'react'
  import  {LOGO} from '../utils/constant'
  import { useDispatch, useSelector } from 'react-redux'
  import {  onAuthStateChanged } from "firebase/auth";
  import { auth } from '../utils/firbase';
  import { addUser ,removeUser } from '../utils/userSlice'
  import { useNavigate } from 'react-router-dom';
  import { useEffect } from 'react';
  import { signOut } from "firebase/auth";
  import { toggleGptSearch } from '../utils/gptSlice';
  
  const Header = () => {
    const dispatch =  useDispatch();
    const navigate =  useNavigate()
    const user = useSelector((store)=>store.user)
  
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid ,email ,displayName }= user;
          console.log('User:', user);
          dispatch(addUser({uid:uid , displayName:displayName , email:email}))
          navigate("/browse");
  
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
      });
      
       //unsubscribe  when component is unmount 
      return () => unSubscribe()
  
    } , [])

    const handleSignout =()=>{

      signOut(auth).then(() => {
       
        navigate("/")
  
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      }); 
      
  
    }

    const handleGpt =()=>{

      dispatch(toggleGptSearch())
        
    }
    const showGptSearch  = useSelector((state)=>state.gpt.showGptSearch)

       return (
    <div className="fixed w-screen bg-gradient-to-b from-black to-transparent px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 z-50 flex justify-between items-center">
    <img
      className="w-24 sm:w-28 md:w-36 lg:w-44"
      src={LOGO}
      alt="netflix-logo"
    />
  
    {user && (
      <div className="flex space-x-2 sm:space-x-3">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base mt-2 sm:mt-4"
          onClick={handleGpt}
        >{showGptSearch ? "Home page" : " GptSearch"}
         
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base mt-2 sm:mt-4"
          onClick={handleSignout}
        >
          Sign out
        </button>
      </div>
    )}
  </div>
  
    )
  }
  
  export default Header
    

  


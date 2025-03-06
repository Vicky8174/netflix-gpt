import { useState } from "react";
import { bgImg } from "../utils/const";
import Header from "./Header";

const Login = () => {

  const[isSignInForm,setSignInForm] = useState(true)

  const toggleSignInForm = () =>{
    setSignInForm(!isSignInForm);

  }
  return (
    <div className="relative w-full h-screen">
      <Header />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bgImg} alt="background-image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Centered Login Form */}
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-65 p-12 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center p-3 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        
        {!isSignInForm && <input 
          type="text" 
          placeholder="Full Name"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
        />}

        <input 
          type="text" 
          placeholder="Email or mobile number"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
        />

        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
        />

        <button className="w-full p-3 my-6 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignInForm} className="text-white text-center py-4 cursor-pointer">{isSignInForm ? "New to Netflix? Sign up now." : "Already registered. Please Sign In"}</p>
      </form>
    </div>
  );
}

export default Login;

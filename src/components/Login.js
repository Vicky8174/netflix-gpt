import { useRef, useState } from "react";
import { bgImg } from "../utils/const";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

  const[isSignInForm,setSignInForm] = useState(true);

  const[errorMessage,setErrormessage] = useState(null);

  

  const email = useRef(null);
  const password = useRef(null);
  
  

  const handleButtonClick = () =>{

    const message = checkValidData(email.current.value, password.current.value);
    setErrormessage(message);

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorMessage)
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorMessage)
      });

    }

  }

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
      <form onSubmit={(e)=>e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-65 p-12 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold text-center p-3 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        
        {!isSignInForm && <input 
          type="text" 
          placeholder="Full Name"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
        />}

        <input 
        ref={email}
          type="text" 
          placeholder="Email or mobile number"
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
        />

        <input 
        ref={password}
          type="password" 
          placeholder="Password" 
          className="w-full p-3 mb-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" 
        />
        <p className="text-red-600 px-2">{errorMessage}</p>

        <button onClick={handleButtonClick} className="w-full p-3 my-6 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800 transition">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        

        <p onClick={toggleSignInForm} className="text-white text-center py-4 cursor-pointer">{isSignInForm ? "New to Netflix? Sign up now." : "Already registered. Please Sign In"}</p>
      </form>
    </div>
  );
}

export default Login;

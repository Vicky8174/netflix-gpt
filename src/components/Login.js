import React, { useState, useRef } from 'react';
import Header from './Header';
import { bgImg } from '../utils/constant';
import checkValidateData from '../utils/validate';
import { auth } from '../utils/firbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [isMessage, setMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current ? name.current.value : '';

    const message = isSignIn
      ? checkValidateData(emailValue, passwordValue)
      : checkValidateData(emailValue, passwordValue, nameValue);

    setMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          setMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          console.log(userCredential.user);
        })
        .catch((error) => {
          setMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen flex flex-col bg-black">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src={bgImg}
          alt="background"
        />
      </div>
      <div className="flex-grow flex items-center justify-center z-10">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black bg-opacity-80 p-10 rounded-lg w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 xl:w-3/12 shadow-lg">
          <h1 className="text-white text-4xl font-semibold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {isMessage && <p className='text-red-500 text-sm mb-6'>{isMessage}</p>}

          <button
            className="w-full p-3 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 mt-6 text-sm">
            {isSignIn ? "New to Netflix?" : "Already have an account?"} 
            <span
              onClick={() => setSignIn(!isSignIn)}
              className="text-white font-semibold cursor-pointer hover:underline ml-1"
            >
              {isSignIn ? "Sign up now." : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
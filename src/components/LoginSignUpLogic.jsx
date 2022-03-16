import React, { useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { userData } from "../api";
import { useState } from "react";

const LoginSignUp = ({ isLoggedIn, setToken, setIsLoggedIn, token }) => {

  const clearToken = () => {
    setToken("");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  
  const [username, setUsername] = useState('')

  useEffect(() => {
    const getUserName = async () => {
      const result = await userData(localStorage.getItem("token"));
      setUsername (result.data.username)
    };
    getUserName()
  }, [token])

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div>{`Welcome Back ${username}`}</div>
          <button className="logOut" onClick={() => clearToken()}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <div>Create account:</div>
          <div>
            <SignUp setToken={setToken} />
          </div>
          <div>Already have an account? Login:</div>
          <div>
            <Login setToken={setToken} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;

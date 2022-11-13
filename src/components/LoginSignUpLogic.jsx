import React, { useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { userData } from "../api";
import { useState } from "react";
//this contains the logic for if you need to log in or sign up. Displays both options below as the components for each have been imported

//eventully can edit this to only display one or the other. Probably just Login with a button to signup.
//If my understanding is correct, I can refer to the way I am controlling the apperance of the message and create post buttons / sections to help.
const LoginSignUp = ({ isLoggedIn, setToken, setIsLoggedIn, token }) => {
  const clearToken = () => {
    setToken("");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUserName = async () => {
      const result = await userData(localStorage.getItem("token"));
      setUsername(result.data.username);
    };
    getUserName();
  }, [token]);

  return (
    <>
      {isLoggedIn ? (
        <div className="userFunctions">
          <h3 className="greeting">{`Welcome Back ${username}`}</h3>
          <button className="logOut" onClick={() => clearToken()}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="registerFunctions">
          <h3>Create account:</h3>
          <div>
            <SignUp setToken={setToken} />
          </div>
          <h3>Already have an account? Login:</h3>
          <div>
            <Login setToken={setToken} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;

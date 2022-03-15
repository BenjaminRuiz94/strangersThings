import React, { useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { userData } from "../api";

const LoginSignUp = ({
  isLoggedIn,
  setToken,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const user = userData();
  console.log(user);

  // console.log(username, "username")

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div>{`Welcome Back ${username}`}</div>
          <button 
            className="logOut" 
            onClick={setToken("")}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <div>
            <SignUp
              setToken={setToken}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div>
              <Login/>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;

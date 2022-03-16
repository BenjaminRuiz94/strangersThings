import React, { useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { userData } from "../api";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const LoginSignUp = ({
  isLoggedIn,
  setToken,
  username,
  setUsername,
  password,
  setPassword,
  setIsLoggedIn,
}) => {
  // const user = userData();
  // console.log(user);
  const [Tok, setTo] = useState(0);
  const setTok = () => {
    setToken(" ");
    localStorage.removeItem("token");
    setTo(1);
    setIsLoggedIn(false);
    // return <Redirect push to={{ pathname: "/Login" }} />;
  };

  useEffect(() => {
    console.log("TEST");
  }, [Tok]);
  // console.log(username, "username")

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div>{`Welcome Back ${username}`}</div>
          <button className="logOut" onClick={() => setTok()}>
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
            <Login setToken={setToken} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;

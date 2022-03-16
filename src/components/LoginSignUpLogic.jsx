import React, { useEffect } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { userData } from "../api";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

const LoginSignUp = ({ isLoggedIn, setToken, setIsLoggedIn }) => {
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
  const getUserName = async () => {
    const result = await userData(localStorage.getItem("token"));
    const shownUser = result.data.username;
    console.log(shownUser);

    return shownUser;
  };
  return (
    <>
      {isLoggedIn ? (
        <div>
          <div>{`Welcome Back ${() => {}}`}</div>
          <button className="logOut" onClick={() => setTok()}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <div>
            <SignUp setToken={setToken} />
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

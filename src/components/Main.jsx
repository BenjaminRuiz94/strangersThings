import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";
import LoginSignUp from "./LoginSignUpLogic";
import PostForm from "./PostForm";

const Main = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : null;
    setToken(localStorage.getItem("token"))
  }, [token]);

  return (
    <div>
      <LoginSignUp
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        token={token}
        setToken={setToken}
      />
      <PostForm token={token}/>
      <Posts />
      
    </div>
  );
};

export default Main;

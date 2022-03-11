import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";
import SignUp from "./SignUp";

const Main = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <div>
      <SignUp setToken={setToken} />
      <Posts />
      {/* <Navbar />
            <User /> */}
    </div>
  );
};

export default Main;

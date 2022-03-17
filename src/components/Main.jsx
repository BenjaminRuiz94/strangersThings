import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";
import LoginSignUp from "./LoginSignUpLogic";
import PostForm from "./PostForm";
import { fetchAllPosts } from "../api";

const Main = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newPostWanted, setNewPostWanted] = useState(true);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : null;
    setToken(localStorage.getItem("token"));
  }, [token]);

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllPosts();
        setAllPosts(response);
      } catch (error) {
        console.error("OH NO!!!!!");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <LoginSignUp
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        token={token}
        setToken={setToken}
      />
      {newPostWanted ? (
        <PostForm
          setNewPostWanted={setNewPostWanted}
          token={token}
          setAllPosts={setAllPosts}
          allPosts={allPosts}
        />
      ) : (
        <button
          onClick={() => {
            setNewPostWanted(true);
          }}
        >
          Create Post
        </button>
      )}

      <Posts allPosts={allPosts} />
    </div>
  );
};

export default Main;

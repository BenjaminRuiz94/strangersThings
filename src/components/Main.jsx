import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Posts from "./Posts";
import LoginSignUp from "./LoginSignUpLogic";
import PostForm from "./PostForm";
import { fetchAllPosts } from "../api";
//our main component. Set state for token, if we are logged in, and if a we want to make a new post.
const Main = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newPostWanted, setNewPostWanted] = useState(false); //new post set to false so button shows to create post.
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : null;
    setToken(localStorage.getItem("token"));
  }, [token]);
  //we checked if a token was available on local storage to see if we needed to log in.
  const [allPosts, setAllPosts] = useState([]);
  //now we fetch the post data.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllPosts(localStorage.getItem("token"));

        setAllPosts(response);
      } catch (error) {
        console.error("OH NO!!!!!");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mainDiv">
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
          className="createPostB"
          onClick={() => {
            setNewPostWanted(true);
          }}
        >
          Create Post
        </button>
      )}

      <Posts allPosts={allPosts} setAllPosts={setAllPosts} token={token} />
    </div>
  ); //posts component placed last so it renders at the lowest point after our login / signup and button / section to submit a new post.
};

export default Main;

import React, { useState } from "react";
import { deletePost } from "../api";
import { Message } from "./Message";
//component for our posts. Sets all of the posts on the main page.

//included inside this component is our message component. Allows user to send message to posts that they are not the owner of.
const Posts = ({ allPosts, token, setAllPosts }) => {
  const [msgBox, setMsgBox] = useState({
    yes: true,
    idx: -1,
  });
  return (
    <div>
      {allPosts.map((post, i) => {
        //gotta map over the posts and return result to get all posts.
        return (
          <div key={i} className="post">
            <header className="pHeader">
              <h1>
                {post.title}, {post.price}
              </h1>

              <h3>{post.author.username}</h3>

              <p>
                {post.location === "[On Request]"
                  ? "Location available on request"
                  : post.location}
              </p>
            </header>

            <article className="postDetails">{post.description}</article>

            <div className="delivery">
              {post.willDeliver ? "Will Deliver" : "Local Pickup Only"}
            </div>

            {!post.isAuthor ? ( //edited this part to make message button only appear on non-user submitted posts.
              msgBox.yes ? (
                msgBox.idx == i ? (
                  <Message post={post} setMsgBox={setMsgBox} /> //here is that message component.
                ) : (
                  <button
                    className="msgButton1"
                    onClick={() => {
                      setMsgBox({ ...msgBox, idx: i });
                    }}
                  >
                    Send Message
                  </button>
                )
              ) : (
                <button
                  className="msgButton2"
                  onClick={() => {
                    setMsgBox({ ...msgBox, idx: i });
                  }}
                >
                  Create Message
                </button>
              )
            ) : null}

            {post.isAuthor ? (
              <button
                className="deleteB"
                onClick={async () => {
                  await deletePost(token, post._id);
                  const filteredPosts = allPosts.filter((currentPost) => {
                    return currentPost._id !== post._id;
                  });
                  setAllPosts(filteredPosts);
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

import React from "react";
import { useState } from "react";
import { deletePost } from "../api";

const Posts = ({ allPosts, token, setAllPosts }) => {
  const [updatedPosts, setUpdatedPosts] = useState([]);
  return (
    <div>
      {allPosts.map((post, i) => {
        return (
          <div key={i} className="post">
            <header>
              <h1>
                {post.title}, {post.active ? "Active" : "Inactive"}
              </h1>{" "}
              <h2>{post.author.username}</h2>
              <h2>{post.location}</h2>
              <h3>{post.updatedAt}</h3>
            </header>
            <article>{post.description}</article>
            <b>{post.price}</b>
            <u>
              {" "}
              {post.willDeliver ? "Will Deliver" : "Delivery not available"}
            </u>
            <footer>{post.createdAt}</footer>
            {post.isAuthor ? (
              <button
                onClick={() => {
                  // deletePost(token, post._id);
                  // setUpdatedPosts([allPosts - updatedPosts]);
                  // setAllPosts(updatedPosts);
                }}
              >
                Edit Post
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

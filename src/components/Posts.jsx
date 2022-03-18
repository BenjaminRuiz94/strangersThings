import React, { useState } from "react";
import { deletePost } from "../api";
import { Message } from "./Message";

const Posts = ({ allPosts, token, setAllPosts }) => {
  const [msgBox, setMsgBox] = useState({
    yes: true,
    idx: -1,
  });
  return (
    <div>
      {allPosts.map((post, i) => {
        return (
          <div key={i} className="post">
            <header>
              <h1>
                {post.title}, {post.price}
              </h1>

              <h2>{post.author.username}</h2>

              <h2>
                {post.location === "[On Request]"
                  ? "Location available on request"
                  : post.location}
              </h2>
            </header>

            <article>{post.description}</article>

            <div>{post.willDeliver ? "Will Deliver" : "Local Pickup Only"}</div>

            {msgBox.yes ? (
              msgBox.idx == i ? (
                <Message post={post} setMsgBox={setMsgBox} />
              ) : (
                <button
                  onClick={() => {
                    setMsgBox({ ...msgBox, idx: i });
                  }}
                >
                  Create Message
                </button>
              )
            ) : (
              <button
                onClick={() => {
                  setMsgBox({ ...msgBox, idx: i });
                }}
              >
                Create Message
              </button>
            )}

            {post.isAuthor ? (
              <button
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

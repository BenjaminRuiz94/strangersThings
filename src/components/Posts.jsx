import React, { useState } from "react";
import { deletePost, sendMessage } from "../api";

const Posts = ({ allPosts, token, setAllPosts }) => {
  
  const [content, setContent] = useState({})
  
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

            {post.isAuthor ? (
              <button
                onClick={async () => {
                  await deletePost(token, post._id);
                  const filteredPosts = allPosts.filter((currentPost) => {
                    return currentPost._id !== post._id;
                  });
                  setAllPosts(filteredPosts);
                }}
              >Delete</button>
            ) : null}

            {!post.isAuthor ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  async () => {
                    await sendMessage(token, post._id, content);
                  };
                }}
              >
                <input
                  type="text"
                  placeholder="Message"
                  value={content}
                  onChange={(e) => {
                    const postId = post._id
                    // setContent(postId: e.target.value)
                  }}
                />
                <button type="submit">Send</button>
              </form>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

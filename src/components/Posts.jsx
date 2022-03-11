import React from "react";
import { fetchAllPosts } from "../api";
fetchAllPosts();
const Posts = async () => {
  const allPosts = await fetchAllPosts();
  console.log(allPosts);
  return (
    <div>
      {allPosts.map((post, i) => {
        return (
          <div key={i} className="post">
            <header>
              <h1>{post.title}</h1> <h2>{post.author.username}</h2>
            </header>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

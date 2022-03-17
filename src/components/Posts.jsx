import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

const Posts = ({ allPosts }) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

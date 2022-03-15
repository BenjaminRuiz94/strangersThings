import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

const Posts = () => {
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
  console.log(allPosts);
  return (
    <div>
      {allPosts.map((post, i) => {
        return (
          <div key={i} className="post">
            <header>
              <h1>
                {post.title}, {post.active ? "Active" : "Inactive"}
              </h1>{" "}
              <h2>{post.author.username}</h2> <h2>{post.location}</h2>
              <h3>{post.updatedAt}</h3>
            </header>
            <body>
              <article>{post.description}</article>
              <b>{post.price}</b>
              <u>
                {" "}
                {post.willDeliver ? "Will Deliver" : "Delivery not available"}
              </u>
            </body>
            <footer>{post.createdAt}</footer>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

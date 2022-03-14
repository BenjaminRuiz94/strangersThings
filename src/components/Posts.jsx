import React from "react";
import { fetchAllPosts } from "../api";
import { useState } from "react";
import { useEffect } from "react";

fetchAllPosts();
const Posts = async () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllPosts();
        console.log(fetchAllPosts());
        const result = await response.json();
        if (result.error) throw result.error;
        console.log(result);
        setAllPosts(result);
      } catch (error) {
        console.error("OH NO!!!!!");
      }
    };
    fetchData();
  }, []);

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

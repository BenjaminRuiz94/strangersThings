import React from "react";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

export const registerUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();

  return data;
};

export async function fetchAllPosts() {
  if (localStorage.getItem("posts")) {
    return JSON.parse(localStorage.getItem("posts"));
  }

  const url = `${BASE_URL}/posts`;

  try {
    const response = await fetch(`${BASE_URL}/posts`);

    const result = await response.json();

    const posts = result.data.posts;

    localStorage.setItem("posts", JSON.stringify(posts));

    return posts;
  } catch (err) {
    console.error("cant fetch posts");
  }
}

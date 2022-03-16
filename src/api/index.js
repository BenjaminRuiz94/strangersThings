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
  const url = `${BASE_URL}/posts`;

  try {
    const response = await fetch(`${BASE_URL}/posts`);

    const result = await response.json();
    const posts = result.data.posts;

    return posts; // we could return just the result itself in order to capture errors
  } catch (err) {
    console.error("cant fetch posts");
  }
}

export const userData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch {
    console.error("can't get user data");
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
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
  } catch {
    console.error("can't log in user");
  }
};

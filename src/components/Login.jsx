import React from "react";
import { loginUser } from "../api"; //different API request. Now we are checking if user already exists, then we set token.
import { useState } from "react";
//this functions the same as the signup component, but edited to login.
const Login = ({ setToken }) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  return (
    <div className="userSubmit">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(
            formState.username,
            formState.password
          );
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
        }}
      >
        <input
          value={formState.username}
          type="text"
          placeholder="username"
          required
          onChange={(e) => {
            setFormState({ ...formState, username: e.target.value });
          }}
        />
        <input
          value={formState.password}
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setFormState({ ...formState, password: e.target.value });
          }}
        />
        <button className="loginButton" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;

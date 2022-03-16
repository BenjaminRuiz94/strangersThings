import React from "react";
import { loginUser } from "../api";
import { useState } from "react";

const Login = ({ setToken }) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(
            formState.username,
            formState.password
          );
          console.log(result, "THIS IS MY RESULT FOR LOGIN");
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
        }}
      >
        {/* duplicate the input for password. */}
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;

import React from "react";
import { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log({ username, password });
          const result = await registerUser(username, password);
          console.log(result);
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
        }}
      >
        {/* duplicate the input for password. */}
        <input
          value={username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;

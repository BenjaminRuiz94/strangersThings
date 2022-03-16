import React from "react";
import { registerUser } from "../api";
import { useState } from "react";

const SignUp = ({ setToken }) => {
  const [formState, setFormState] = useState({
    username: "",

    password: "",
  });
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(
            formState.username,
            formState.password
          );
          console.log(result, "This is my result for sign up");
          setToken(result.data.token);
          localStorage.setItem("token", result.data.token);
        }}
      >
        {/* duplicate the input for password. */}
        <input
          value={formState.username}
          type="text"
          placeholder="username"
          onChange={(e) => {
            setFormState({ ...formState, username: e.target.value });
          }}
        />
        <input
          value={formState.password}
          type="text"
          placeholder="password"
          onChange={(e) => {
            setFormState({ ...formState, password: e.target.value });
          }}
        />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;

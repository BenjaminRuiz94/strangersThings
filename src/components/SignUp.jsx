import React from "react";
import { registerUser } from "../api"; //component imported from API that fetches data from URL
import { useState } from "react";
//the first component signs up a new user if not currently one.
const SignUp = ({ setToken }) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="register">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (formState.password === formState.confirmPassword) {
            //makes sure the password and confirm password section match or else
            //confirming the password would not matter.
            const result = await registerUser(
              formState.username,
              formState.password
            );
            setToken(result.data.token); //setting token and saving in local storage once registered.
            localStorage.setItem("token", result.data.token);
          }
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
          type="password" //this hides values like a password.
          placeholder="password"
          required
          onChange={(e) => {
            setFormState({ ...formState, password: e.target.value });
          }}
        />
        <input
          value={formState.confirmPassword}
          type="password"
          placeholder="confirm password"
          required
          onChange={(e) => {
            setFormState({ ...formState, confirmPassword: e.target.value });
          }}
        />
        <button className="signupButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

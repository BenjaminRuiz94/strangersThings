import React, { useState } from "react";
import { createNewPost } from "../api";

const PostForm = ({ token, allPosts, setAllPosts, setNewPostWanted }) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: false,
  });

  return (
    <>
      <form
        className="createPost"
        onSubmit={async (e) => {
          e.preventDefault();
          const createPost = await createNewPost(
            token,
            formState.title,
            formState.description,
            formState.price,
            formState.location,
            formState.willDeliver
          );
          setAllPosts([...allPosts, createPost]);
          setNewPostWanted(false);
        }}
      >
        <div className="createTitle">Create A Post</div>
        <input
          className="title"
          type="text"
          value={formState.title}
          placeholder="Title"
          required
          onChange={(e) => {
            setFormState({ ...formState, title: e.target.value });
          }}
        />
        <input
          className="description"
          type="text"
          value={formState.description}
          placeholder="Description"
          required
          onChange={(e) => {
            setFormState({ ...formState, description: e.target.value });
          }}
        />
        <input
          className="price"
          type="text"
          value={formState.price}
          placeholder="Price"
          required
          onChange={(e) => {
            setFormState({ ...formState, price: e.target.value });
          }}
        />
        <input
          className="location"
          type="text"
          value={formState.location}
          placeholder="Location"
          onChange={(e) => {
            setFormState({ ...formState, location: e.target.value });
          }}
        />
        <div className="deliver">
          <div>Deliver?</div>
          <input
            type="checkbox"
            value={formState.willDeliver}
            onChange={() => {
              setFormState({
                ...formState,
                willDeliver: !formState.willDeliver,
              });
            }}
          />
        </div>
        <button className="newPostButton" type="submit">
          Submit Post
        </button>
      </form>
    </>
  );
};

export default PostForm;

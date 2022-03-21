import React, { useState } from "react";
import { createNewPost } from "../api"; //createNewPost imported from API. Data needed from URL.
//this is the component to create a new post.
const PostForm = ({ token, allPosts, setAllPosts, setNewPostWanted }) => {
  const [formState, setFormState] = useState({
    //set state for our title, description, price, location and delivery.
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: false,
  });

  return (
    <>
      <form //all of our inputs go inside of this form, so upon submit they create a new post through altering state.
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
            setFormState({ ...formState, title: e.target.value }); //setting new state for title based on input values.
          }}
        />
        <input
          className="description"
          type="text"
          value={formState.description}
          placeholder="Description"
          required
          onChange={(e) => {
            setFormState({ ...formState, description: e.target.value }); //new description based on input values.
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
            type="checkbox" //checkbox for true / false values.
            value={formState.willDeliver}
            onChange={() => {
              setFormState({
                //setting state is slightly different because of true / false value.
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

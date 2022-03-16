import React, { useState } from "react";
import { createNewPost } from "../api";


const PostForm = ({ token }) => {
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
        onSubmit={async (e) => {
          e.preventDefault();
          await createNewPost(
            token,
            formState.title,
            formState.description,
            formState.price,
            formState.location,
            formState.willDeliver
          );
        }}>
            <div>Create A Post</div>
            <input 
                type="text"
                value={formState.title}
                placeholder="Title"
                required
                onChange={(e) => {
                    setFormState({ ...formState, title: e.target.value });
                }}/>
            <input 
                type="text"
                value={formState.description}
                placeholder="Description"
                required
                onChange={(e) => {
                    setFormState({ ...formState, description: e.target.value });
                  }}/>
            <input 
                type="text"
                value={formState.price}
                placeholder="Price"
                required
                onChange={(e) => {
                    setFormState({ ...formState, price: e.target.value });
                  }}/>
            <input 
                type="text"
                value={formState.location}
                placeholder="Location"
                required
                onChange={(e) => {
                    setFormState({ ...formState, location: e.target.value });
                  }}/>
            <div>
                <div>Deliver?</div>
                <input 
                    type="checkbox"
                    value={formState.willDeliver}
                    required
                    onChange={(e) => {
                        setFormState({ ...formState, willDeliver: e.target.value });
                    }}/>
                </div>
            <button 
                type="submit"
                onClick={}
            >Submit Post</button>
        </form>
    </>
  );
};

export default PostForm
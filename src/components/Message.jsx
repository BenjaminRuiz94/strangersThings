import react from "react";
import { useState } from "react";
import { sendMessage } from "../api";

export const Message = ({ post, setMsgBox, msgBox }) => {
  const [formState, setFormState] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        async () => {
          await sendMessage(token, post._id, content);
        };
        setMsgBox({ ...msgBox, idx: -1 });
      }}
    >
      <input
        type="text"
        placeholder="Message"
        value={formState}
        onChange={(e) => {
          const postId = post._id;
          setFormState(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
};

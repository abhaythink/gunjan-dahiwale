import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    const postData = {title, content};

    e.preventDefault();

    try{
      const response = await fetch("http://localhost:8000/feed/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
      });

      if(!response.ok)
        return Error("Failed to create post");

      const data = await response.json();
      console.log("Post created successfully", data);
      setContent("");
      setTitle("");
    } catch (err) {
      alert('Failed to created post');
      console.log(err);  
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h2>Create New Post here</h2>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          name="content"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </React.Fragment>
  );
}

export default CreatePost;

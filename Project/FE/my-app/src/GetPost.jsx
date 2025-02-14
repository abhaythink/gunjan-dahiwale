import React, { useEffect, useState } from "react";

function GetPost() {
  const [posts, setPosts] = useState([]); // Ensure initial state is an array

  const getAllPosts = async () => {
    try {
      const res = await fetch("http://localhost:8000/feed/posts", { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      console.log("Response fetched successfully:", data);

  
      setPosts(data); 
    } catch (err) {
      console.error("Error fetching posts:", err);
      alert("Cannot get posts");
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
              <h3>Title: {post.title}</h3>
              <p>Content: {post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default GetPost;

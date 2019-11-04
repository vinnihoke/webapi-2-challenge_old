import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post.jsx";
import AddPost from "./AddPost.js";
import EditPost from "./EditPost.js";

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [posts, setPosts] = useState([]);

  const retrievePosts = () => {
    axios
      .get("http://localhost:4000/api/posts/")
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    retrievePosts();
  }, [loading]);

  return (
    <section>
      {editing === true ? (
        <EditPost
          setEditing={setEditing}
          editing={editing}
          setLoading={setLoading}
        />
      ) : (
        <AddPost setLoading={setLoading} />
      )}
      {posts.map((post, index) => (
        <Post
          key={index}
          {...post}
          setLoading={setLoading}
          setEditing={setEditing}
          editing={editing}
        />
      ))}
    </section>
  );
};

export default Posts;

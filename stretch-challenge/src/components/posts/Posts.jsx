import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post.jsx";

const Posts = () => {
  const [loading, setLoading] = useState(false);
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
  }, []);

  return (
    <section>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </section>
  );
};

export default Posts;

import React, { useState } from "react";
import axios from "axios";

const EditPost = ({ setLoading, loading }) => {
  const [post, setPost] = useState({
    title: "",
    contents: ""
  });

  const changeHandler = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (post.title !== "" || post.contents !== "") {
      axios
        .post("http://localhost:4000/api/posts/", post)
        .then(res => {
          console.log("Post successful");
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
      alert("Please add a title and contents");
    }
  };

  return (
    <section>
      <h3>Editing post</h3>
      <form onSubmit={e => onSubmit(e)}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={e => changeHandler(e)}
          />
        </label>
        <label htmlFor="contents">
          Content:
          <input
            type="text"
            name="contents"
            value={post.contents}
            onChange={e => changeHandler(e)}
          />
        </label>
        <input type="submit" value="Update post" />
      </form>
    </section>
  );
};

export default EditPost;

import React, { useState } from "react";
import axios from "axios";

const AddPost = ({ setLoading, loading }) => {
  const [post, setPost] = useState({
    title: "",
    contents: ""
  });
  const [success, setSuccess] = useState(false);

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
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2500);
  };

  return (
    <section>
      {success === true ? <h3>Post successful!</h3> : <h3>Add a Post</h3>}

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
        <input type="submit" />
      </form>
    </section>
  );
};

export default AddPost;

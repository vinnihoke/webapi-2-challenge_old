import React, { useState } from "react";
import axios from "axios";

const EditPost = props => {
  const { setLoading, loading, editing, setEditing } = props;

  const [update, setUpdate] = useState({
    title: "",
    contents: ""
  });

  const changeHandler = e => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    if (update.title !== "" || update.contents !== "") {
      axios
        .put("http://localhost:4000/api/posts/", update)
        .then(res => {
          console.log("Post successfully updated");
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
            value={update.title}
            onChange={e => changeHandler(e)}
          />
        </label>
        <label htmlFor="contents">
          Content:
          <input
            type="text"
            name="contents"
            value={update.contents}
            onChange={e => changeHandler(e)}
          />
        </label>
        <input type="submit" value="Update post" />
        <button onClick={() => setEditing(!editing)}>Cancel Edit</button>
      </form>
    </section>
  );
};

export default EditPost;

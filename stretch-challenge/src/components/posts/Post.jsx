import React from "react";
import axios from "axios";

const Post = props => {
  const { setLoading, setEditing, editing } = props;

  const deletePost = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/api/posts/${props.id}`)
      .then(res => {
        console.log(`Successfully deleted post ${props.id}`);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const editPost = () => {
    setEditing(!editing);
  };

  return (
    <article
      style={{
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        padding: 10,
        margin: 30
      }}
    >
      <div>
        <figure>
          <h3>{props.title}</h3>
          <h6>Created: {props.created_at}</h6>
          <h6>Updated: {props.updated_at}</h6>
          <h6>ID: {props.id}</h6>
          <section style={{ backgroundColor: "white", padding: 30 }}>
            <p>{props.contents}</p>
          </section>
        </figure>
      </div>
      <button onClick={deletePost}>Delete</button>
      <button onClick={editPost}>Edit</button>
    </article>
  );
};

export default Post;

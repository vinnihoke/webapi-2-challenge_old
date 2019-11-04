import React from "react";

const Post = props => {
  console.log(props);
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
    </article>
  );
};

export default Post;

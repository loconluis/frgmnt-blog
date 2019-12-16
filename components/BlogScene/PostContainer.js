import React from "react";
import moment from "moment";

export default function PostContainer(props) {
  moment.locale("es");
  return (
    <article className="post-container">
      <h2>
        <a className="title" href="#">
          {props.title || "Titulo de Post"}
        </a>
      </h2>
      <div className="date">
        {moment(props.date).format("MMM DD, YYYY")} - {props.author}
      </div>
      <div className="content">
        {props.children}
      </div>
    </article>
  );
}

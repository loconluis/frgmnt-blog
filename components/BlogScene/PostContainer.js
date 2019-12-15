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
      <div className="date">{moment(props.date).format("MMM DD, YYYY")}</div>
      <div className="content">
        {props.children}
      </div>
      <div></div>
      <style jsx>
        {`
          .post-container {
            @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');
            font-family: 'Inconsolata', monospace;
            padding-top: 50px;
            max-width: 650px;
            margin: auto;

          }
          .title {
            text-decoration: none;
            color: #ff0080;
            font-weight: bold;
            font-size: 25px;
          }
          .title:hover {
            background: #ff0080;
            color: #000000;
          }
          .date {
            color: rgba(6, 6, 6, 0.53);
            font-size: 15px;
          }
          .content {
            margin-top: 20px;
            font-size: 16px;
            margin-bottom: 50px;
          }
        `}
      </style>
    </article>
  );
}

import React from "react";
import { post } from "./post";
import Link from "next/link";
import moment from "moment";

export default function index() {
  moment.locale("es");
  return (
    <div className="list-post-main">
      {post.map(el => {
        return (
          <div key={el.id} className="post">
            <br />
            <p className="post-date">
              {moment(el.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={el.url}>
              <h3 className="post-title">{el.title}</h3>
            </Link>
            <a href={el.linkOfAuthor} target="_blank">
              <p className="post-author">{el.author}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

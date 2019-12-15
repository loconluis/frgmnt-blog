import React from "react";
import Link from "next/link";
import Head from "../head";

export default function TopBar(props) {
  return (
    <div className="topbar-main">
      <Head title={props.headTitle || "FRGMNT Blog"} />
      <Link href="/blog">
        <h1>
          <Link href="/">
            <a className="topbar-main-home">
              <i className="fas fa-globe"></i>
            </a>
          </Link>
          <span className="slash">/</span>
          <a className="topbar-main-title">
            FRGMNT
            <span className="blog">
              <small>Blog</small>
            </span>
          </a>
        </h1>
      </Link>
      <style jsx>{`
        .topbar-main-title {
          color: #000000;
          text-decoration: none;
          cursor: pointer;
          @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
          font-family: "Montserrat", sans-serif;
        }
        h1 {
          margin-left: 40px;
          margin-top: 20px;
          padding-top: 10px;
          padding-left: 10px;
          font-weight: bold;
          font-size: 40px;
        }
        .blog {
          margin: 0;
          padding: 0;
          font-size: 20px;
          color: rgba(6, 6, 6, 0.53);
        }
        .slash {
          padding: 0 5px;
        }
        .topbar-main-home {
          color: #000000;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

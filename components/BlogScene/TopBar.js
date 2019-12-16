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
    </div>
  );
}

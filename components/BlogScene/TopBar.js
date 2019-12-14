import React from "react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="topbar-main">
      <Link href="/blog">
        <a className="topbar-main-title">
          <h1>
            FRGMNT <small>Blog</small>
          </h1>
        </a>
      </Link>
      <style jsx>{`
        .topbar-main-title {
          color: #000000;
          text-decoration: none;
          cursor: pointer;
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
          font-family: 'Montserrat', sans-serif;
        }
        h1 {
          padding-top: 10px;
          padding-left: 10px;
          font-weight: bold;
          font-size: 40px;
        }
      `}</style>
    </div>
  );
}

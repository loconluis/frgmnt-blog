import React from "react";
import TopBar from "./TopBar";
import ListOfPost from "./ListOfPost";

export default function index() {
  return (
    <div className="blog-main">
      <TopBar />
      <ListOfPost />
      <style jsx>{`
        .blog-main {
          @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
    </div>
  );
}

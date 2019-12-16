import React from "react";
import TopBar from "./TopBar";
import ListOfPost from "./ListOfPost";
import '../../styles/index.scss'

export default function index() {
  return (
    <div className="blog-main">
      <TopBar />
      <ListOfPost />
    </div>
  );
}

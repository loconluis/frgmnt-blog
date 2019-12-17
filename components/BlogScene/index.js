import React from "react";
import TopBar from "./TopBar";
import ListOfPost from "./ListOfPost";
import '../../styles/index.scss'

export default function index() {
  return (
    <div className="blog-main">
      <TopBar />
      <div className="topbar-entry">
        <h2>Entradas</h2>
      </div>
      <ListOfPost />
    </div>
  );
}

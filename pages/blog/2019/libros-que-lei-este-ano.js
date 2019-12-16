import React from "react";
import LayoutPost from "../../../components/BlogScene/LayoutOfPost";
import ListWithLinks from "../../../components/BlogScene/components/ListWithLinks";

export default () => {
  const elements = [
    {
      name: "No es por Vista",
      link: "",
      author: "Cash Luna"
    },
    {
      name: "No es por Vista",
      link: "",
      author: "Cash Luna"
    },
    {
      name: "No es por Vista",
      link: "",
      author: "Cash Luna"
    },
    {
      name: "No es por Vista",
      link: "",
      author: "Cash Luna"
    }
  ];
  return (
    <LayoutPost
      headTitle={"Libros que leí este año."}
      title="Libros que leí este año 2019."
      date="2019-12-16"
      author="Luis Locon"
    >
      <p>Hola como estas</p>
      <ListWithLinks orderList elements={elements} />
    </LayoutPost>
  );
};

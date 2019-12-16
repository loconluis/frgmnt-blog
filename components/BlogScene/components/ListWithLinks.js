import React from "react";

export default function Quote(props) {
  let elements = props.elements;
  if (props.unorderList) {
    return (
      <ul className="list-with-link">
        {elements.map((el, index) => (
          <li key={index}>
            <a href={el.link}>{el.name}</a> {el.author && `- ${el.author}`}
          </li>
        ))}
        {props.children}
      </ul>
    );
  }

  if (props.orderList) {
    return (
      <ol className="list-with-link">
        {elements.map((el, index) => (
          <li key={index}>
            <a className="list-link" href={el.link}>{el.name}</a> {el.author && `- ${el.author}`}
          </li>
        ))}
        {props.children}
      </ol>
    );
  }
}

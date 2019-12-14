import React from "react";
import Link from "next/link";

export default function HomeScene() {
  return (
    <div className="hero__box">
      <h1>
        FRGMNT X{" "}
        <a
          className="hero__anchor"
          href="https://luislocon.dev"
          target="_blank"
        >
          Luis Locon
        </a>
      </h1>
      <h3>
        Mis palabras son <span>#FRGMNT</span> de lo que soy.
      </h3>
      <br />
      <Link href="/blog">
        <a className="hero-button">
          Ir al blog <i className="fas fa-angle-right" />
        </a>
      </Link>
      <style jsx>{`
        h1 {
          font-weight: bold;
          font-size: 40px;
        }
        h3 {
          font-weight: 400;
          font-size: 15px;
        }
        .hero__box {
          font-family: 'Montserrat', sans-serif;
          border-radius: 3px;
          text-align: center;
          padding: $l-size $m-size;
        }
        .hero-button {
          cursor: pointer;
          background: #000000;
          padding: 10px;
          color: #ffffff;
          border-radius: 10px;
        }
        .hero__anchor {
          font-weight: 400;
          color: #000000;
          text-decoration: none;
          cursor: pointer;
        }
        .hero__anchor:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

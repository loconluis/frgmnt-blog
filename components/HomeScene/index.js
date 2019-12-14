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
        Mis palabras son <a className="anchor-fragment">#FRGMNT</a> de lo que soy.
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
          box-shadow: 0 5px 10px rgba(0,0,0,0.12);
          text-decoration: none;
          cursor: pointer;
          background: #000000;
          padding: 10px;
          color: #ffffff;
          border-radius: 10px;
        }
        .hero-button:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          text-decoration: underline;
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
        .anchor-fragment {
          color: #FF0080;
        }
      `}</style>
    </div>
  );
}

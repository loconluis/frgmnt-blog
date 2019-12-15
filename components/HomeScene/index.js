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
      <Link href="https://www.instagram.com/frgmntx_/">
        <a className="hero-button">
          <i className="fab fa-instagram" /> Instagram 
        </a>
      </Link>
      <Link href="/blog">
        <a className="hero-button">
          Ir al blog <i className="fas fa-angle-right" />
        </a>
      </Link>
    </div>
  );
}

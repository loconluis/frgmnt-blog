import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import HomeScene from "../components/HomeScene";
import FooterHome from "../components/HomeScene/FooterOfHomeScene";

export default () => (
  <div className="hero">
    <Head title="FRGMNT by Luis Locon :::::" />
    <HomeScene />
    <FooterHome />
    <style global jsx>{`
      * {
        box-sizing: border-box;
        margin: 0;
      }
      html {
        font-size: 62.5%; // to convert html px to 10
      }

      body {
        color: $black-color;
        font-family: $primary-font, $secondary-font, sans-serif;
        font-size: $font-size-small;
        line-height: 1.6;
      }

      button {
        cursor: pointer;
      }

      button:disabled {
        cursor: default;
      }

      .is-active {
        font-weight: bold;
      }
    `}</style>
    <style jsx>{`
      .hero {
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
        align-items: center;
        display: -ms-flexbox;
        display: flex;
        background: #e5fb52;
        height: 100vh;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
      }
    `}</style>
  </div>
);

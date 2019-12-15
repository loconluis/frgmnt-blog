import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import HomeScene from "../components/HomeScene";
import FooterHome from "../components/HomeScene/FooterOfHomeScene";
import '../styles/index.scss'

export default () => (
  <div className="hero">
    <Head title="FRGMNT by Luis Locon :::::" />
    <HomeScene />
    <FooterHome />
  </div>
);

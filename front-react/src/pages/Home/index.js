import React from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import { headerHomeLinks } from "../../Utils/header";

const Home = () => {
  return (
    <>
      <Header brand="RESIDUUM" links={headerHomeLinks} />
      <Footer />
    </>
  );
};

export default Home;

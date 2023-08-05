import React from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import { headerUserLinks } from "../../Utils/header";

const User = () => {
  return (
    <>
      <Header brand="RESIDUUM" links={headerUserLinks} />
      <Footer />
    </>
  );
};

export default User;

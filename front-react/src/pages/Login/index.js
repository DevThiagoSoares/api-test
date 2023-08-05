import React from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import LoginForm from "./../../components/LoginForm/index";
import { headerHomeLinks } from "../../Utils/header";

const Login = () => {
  return (
    <>
      <Header brand="RESIDUUM" links={headerHomeLinks} />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;

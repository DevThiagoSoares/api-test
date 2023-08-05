import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style.css";
import User from "./pages/UserPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;

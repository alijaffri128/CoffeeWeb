import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Customers from "../components/Customers";
import LoginForm from "../components/LoginForm";

const LandingPage = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="customers">
        <Customers />
      </div>

      <div id="contactus">
        <LoginForm />
      </div>
    </>
  );
};

export default LandingPage; 
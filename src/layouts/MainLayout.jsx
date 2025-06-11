import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingCard from "../components/ShoppingCard";

const MainLayout = () => {
  const location = useLocation();
  
  // Check if current route is an error page
  const isErrorPage = location.pathname === "/error" || 
                     location.pathname === "*" || 
                     !["/", "/home", "/about", "/products", "/customers", "/contactus"].includes(location.pathname);

  return (
    <>
      {/* Conditionally render Header and Footer based on route */}
      {!isErrorPage && <Header />}
      
      {/* Where the child route component will render */}
      <Outlet />

      {!isErrorPage && <Footer />}
      {!isErrorPage && <ShoppingCard />}
    </>
  );
};

export default MainLayout; 
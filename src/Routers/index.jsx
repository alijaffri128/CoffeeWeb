import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../components/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main layout routes - will show Header and Footer */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="about" element={<LandingPage />} />
        <Route path="products" element={<LandingPage />} />
        <Route path="customers" element={<LandingPage />} />
        <Route path="contactus" element={<LandingPage />} />
      </Route>

      {/* Error page routes - will NOT show Header and Footer */}
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes; 
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/users/HomePage";
import AboutPage from "../pages/users/AboutPage";
import PropertyDetailsPage from "../pages/users/PropertyDetailsPage";
import PropertiesPage from "../pages/users/PropertiesPage";
import AuthPage from "../pages/users/AuthPage";
import ContactPage from "../pages/users/ContactPage";


const CustomRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          
          {/* ADMIN ROUTES */}
          {/* USER ROUTES */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="auth" element={<AuthPage />} />

          <Route path="properties">
            <Route index element={<PropertiesPage/>} />
            <Route path=":propertyId" element={<PropertyDetailsPage />} />
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;

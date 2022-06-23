
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/users/AboutPage'
import ContactPage from '../pages/users/ContactPage'
import HomePage from '../pages/users/HomePage'
import AuthPage from '../pages/users/AuthPage'
import PropertiesPage from '../pages/users/PropertiesPage'
import UserTemplate from '../templates/user-template'

const CustomRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/">
            {/* ADMIN ROUTES */}

            {/* USER ROUTES */}
            <Route index element={<UserTemplate><HomePage/></UserTemplate>}/>
            <Route path="about" element={<UserTemplate><AboutPage/></UserTemplate>}/>
            <Route path="contact" element={<UserTemplate><ContactPage/></UserTemplate>}/>
            <Route path="auth" element={<UserTemplate><AuthPage/></UserTemplate>}/>
            <Route path="properties" element={<UserTemplate><PropertiesPage/></UserTemplate>}/>


        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes


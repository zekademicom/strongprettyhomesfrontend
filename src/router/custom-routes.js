
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/users/ContactPage'
import HomePage from '../pages/users/HomePage'
import AuthPage from '../pages/users/AuthPage'
import PropertiesPage from '../pages/users/PropertiesPage'
import UserTemplate from '../templates/user-template'
import PropertyDetailsPage from '../pages/users/PropertyDetailsPage'
import ProtectedRoute from './protected-route'
import UserReservationsPage from '../pages/users/UserReservationsPage'
import UserReservationDetailsPage from '../pages/users/UserReservationDetailsPage'
import UnAuthorizedPage from '../pages/common/UnAuthorizedPage'
import NotFoundPage from '../pages/common/NotFoundPage'
import AboutPage from '../pages/users/AboutPage'
import ProfilePage from '../pages/users/ProfilePage'
import AdminDashboardPage from '../pages/admins/AdminDashboardPage'
import AdminUsersPage from '../pages/admins/AdminUsersPage'
import AdminUsersEditPage from '../pages/admins/AdminUsersEditPage'
import AdminUsersNewPage from '../pages/admins/AdminUsersNewPage'
import AdminPropertiesPage from '../pages/admins/AdminPropertiesPage'
import AdminPropertiesNewPage from '../pages/admins/AdminPropertiesNewPage'
import AdminReservationsPage from '../pages/admins/AdminReservationsPage'
import AdminReservationEditPage from '../pages/admins/AdminReservationEditPage'
import AdminTemplate from '../templates/admin-template'
import AdminPropertiesEditPage from '../pages/admins/AdminPropertiesEditPage'

const CustomRoutes = () => {
  return (
    <BrowserRouter>

    <Routes>

        <Route path="/">

            {/* ADMIN ROUTES */}
            <Route path="admin">
            <Route index element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminDashboardPage/></AdminTemplate></ProtectedRoute>}/>
            <Route path="users">
              <Route index element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminUsersPage/></AdminTemplate></ProtectedRoute>}/>
              <Route path=":userId" element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminUsersEditPage/></AdminTemplate></ProtectedRoute>}/>
              <Route path="new" element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminUsersNewPage/></AdminTemplate></ProtectedRoute>}/>
            </Route>
            <Route path="properties">
              <Route index element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminPropertiesPage/></AdminTemplate></ProtectedRoute>}/>
              <Route path=":propertiesId" element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminPropertiesEditPage/></AdminTemplate></ProtectedRoute>}/>
              <Route path="new" element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminPropertiesNewPage/></AdminTemplate></ProtectedRoute>}/>
            </Route>
            <Route path="reservations">
              <Route index element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminReservationsPage/></AdminTemplate></ProtectedRoute>}/>
              <Route path=":reservationId" element={<ProtectedRoute isAdmin={true}><AdminTemplate><AdminReservationEditPage/></AdminTemplate></ProtectedRoute>}/>
            </Route>
          </Route>



            {/* USER ROUTES */}
            <Route index element={<UserTemplate><HomePage/></UserTemplate>}/>
            <Route path="about" element={<UserTemplate><AboutPage/></UserTemplate>}/>
            <Route path="contact" element={<UserTemplate><ContactPage/></UserTemplate>}/>
            <Route path="auth" element={<UserTemplate><AuthPage/></UserTemplate>}/>
            
            <Route path="properties"> 
         <Route index element={<UserTemplate><PropertiesPage/></UserTemplate>}/>
         <Route path=":propertyId" element={<UserTemplate><PropertyDetailsPage/></UserTemplate>}/>
         </Route>

         <Route path="user">
            <Route index element={<ProtectedRoute><UserTemplate><ProfilePage /></UserTemplate></ProtectedRoute>} />
            <Route path="reservations">
              <Route index element={<ProtectedRoute><UserTemplate><UserReservationsPage/></UserTemplate></ProtectedRoute>} />
              <Route path=":reservationId" element={<ProtectedRoute><UserTemplate><UserReservationDetailsPage/></UserTemplate></ProtectedRoute>} />
            </Route>
          </Route>

          <Route path='unauthorized' element={<UserTemplate><UnAuthorizedPage /></UserTemplate>} />
          <Route path='*' element={<UserTemplate><NotFoundPage /></UserTemplate>} />

        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes


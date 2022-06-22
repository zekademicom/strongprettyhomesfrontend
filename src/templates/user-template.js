import React from 'react'
import Footer from '../components/user/common/footer/footer'
import MainNavbar from '../components/user/common/header/main-navbar'

const UserTemplate = ({children}) => {
  return (
    <>
        
        <MainNavbar/>
        {children}
        <Footer/>
    </>
  )
}
/*  */
export default UserTemplate
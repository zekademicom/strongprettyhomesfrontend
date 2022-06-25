import React from 'react'
import Auth from '../../components/user/auth/auth'
import PageHeader from '../../components/user/common/page-header/page-header'
import Spacer from '../../components/user/common/spacer/spacer'



const AuthPage = () => {
  return (

    <>
    <PageHeader title="Login - Register"/>
    <Spacer/>
    <Auth/>
    <Spacer/>
    
    
    </>


  )
}

export default AuthPage
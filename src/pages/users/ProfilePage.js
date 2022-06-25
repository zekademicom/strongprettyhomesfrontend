import React from 'react'
import PageHeader from '../../components/user/common/page-header/page-header'
import Spacer from '../../components/user/common/spacer/spacer'
import Profile from '../../components/user/profile/profile'

const ProfilePage = () => {
  return (
    <>
        <PageHeader title="Profile"/>
        <Spacer/>
        <Profile/>
        <Spacer/>
    </>
  )
}

export default ProfilePage
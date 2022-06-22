import React from 'react'
import PropertyCard from '../../components/users/common/property-card/PropertyCard'
import PopularProperties from '../../components/users/home/popular-properties.js/popular-property'
import Slider from '../../components/users/home/slider/slider'


const HomePage = () => {
  return (
    <>
  <Slider/>
  <PopularProperties />
    </>

  )
}

export default HomePage
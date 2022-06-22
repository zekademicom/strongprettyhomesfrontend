import React from 'react'

import PopularProperties from '../../components/user/home/popular-properties.js/popular-property';
import Slider from '../../components/user/home/slider/slider'

import Spacer from '../../components/user/common/spacer/spacer'
import OurPartners from "../../components/user/common/OurPartners/OurPartners";
import AdvanceSearch from "../../components/user/home/search/advance-search";
import SearchBar from "../../components/user/home/search/searchbar";
import StatusBar from "../../components/user/home/search/status-bar";



const HomePage = () => {
  return (
<>

     
      <Slider/>
    
      <PopularProperties />
      <OurPartners/>
      

</>

)}


export default HomePage
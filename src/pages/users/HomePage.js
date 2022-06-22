import React from 'react'
import Spacer from '../../components/user/common/spacer/spacer'
import OurPartners from "../../components/user/common/OurPartners/OurPartners";
import AdvanceSearch from "../../components/user/home/search/advance-search";
import SearchBar from "../../components/user/home/search/searchbar";
import StatusBar from "../../components/user/home/search/status-bar";


const HomePage = () => {
  return (
<>

      <Spacer />
      <Spacer />
      <StatusBar/>
      <SearchBar/>
      <AdvanceSearch/>
      <OurPartners/>
      

</>

)}

export default HomePage
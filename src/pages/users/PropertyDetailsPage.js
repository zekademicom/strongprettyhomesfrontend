import React, { useEffect, useState } from "react";
import { Alert, Container,Col,Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../components/user/common/page-header/page-header";
import Spacer from "../../components/user/common/spacer/spacer";

import PropertyAgent from "../../components/user/agent/property-agent";
import PropertyDetails from "../../components/user/properties/property-details";
import SwiperImg from "../../components/user/properties/swiper-img";
import TourRequestForm from "../../components/user/tour-request/tourRequestForm";


import { useStore } from "../../store";

const PropertyDetailsPage = () => {
  const { propertyId } = useParams();
  const { propertyState, userState } = useStore();
  const { properties } = propertyState;
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { isUserLogin } = userState;
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProperties = properties.filter((item) => item.id == propertyId);
    if (selectedProperties.length <= 0) navigate("/property-not-found");
    setSelectedProperty(selectedProperties[0]);
    console.log(selectedProperties);
    // 
  }, []);


  if (selectedProperty)

    return (
    
  <>

        <PageHeader title={selectedProperty.title} />
        <Spacer height={40}/>
          
<Container fluid >
<Row >
    <Col md={8}>
    <SwiperImg/>
    </Col>
    <Col md={4}>

    <PropertyDetails property={selectedProperty}/>
  {/* <PropertyAgent agent={selectedProperty.agent} />*/}
    </Col>
</Row>
</Container>

<Spacer height={40}/>

<Container fluid >
<Row >
    <Col md={8}>
    {/* {isUserLogin ? (
          <> */}
            <TourRequestForm tourRequest={selectedProperty} />
          {/* </>
        ) : (
          <Container>
            <Alert variant="warning">
              <h4 className="text-center">
                Please log in to system to check the availability of the property and
                make tour request.
              </h4>
            </Alert>
          </Container>
        )} */}
    </Col>
    <Col md={4}>
    <PropertyAgent agent={selectedProperty.agent} />
    </Col>
</Row>
</Container>


        {/* <HomeFeature features={selectedProperty}/> */}
    
     
   
        </>
    );
 
};

export default PropertyDetailsPage;

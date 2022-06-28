import React, { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../components/user/common/page-header/page-header";
import Spacer from "../../components/user/common/spacer/spacer";
import PropertyDetails from "../../components/user/properties/property-details";
import SwiperImageProperty from "../../components/user/properties/swiper-image-property";

import { useStore } from "../../store";

const PropertyDetailsPage = () => {



  const { propertyId } = useParams();
  // custom-route da tanimladigimiz vehicleid alip koyuyoruz oradaki url deki parametreleri araba idlerini useParam hook unu kullanarak aliyorz
  // 2. adim bu id ile merkezi sisteme ulasmamiz lazim=>store-index 20
  const { propertyState, userState } = useStore();
  // y a merkezi sistemden araclari aldik useri aldik
  const { properties } = propertyState;
  // butun arabalar y
  const [selectedProperty, setSelectedProperty] = useState(null);
  // y ilgili araci bulup saklayabilmek icin state yaptik=dizinin bos mu dolu mu kontrolunu lenght ile yapariz ama object ise null ile yapariz
  const { isUserLogin } = userState;
  const navigate = useNavigate();

  useEffect(() => {//useeffect te await diyemiyoruz
    const selectedProperties = properties.filter((item) => item.id == propertyId);
    // vehicles=mevcut 11 araba=kasadaki arabaid si urlden gelen id e esitse filtrele ve filter bize dizi getirir[] merkezi sistemden kontrol ediyoruz sonra a detail ve bookingforma gond
    if (selectedProperties.length <= 0) navigate("/property-not-found");
    setSelectedProperty(selectedProperties[0]);
    console.log(selectedProperties[0]);
    // 
  }, []);

  if (selectedProperty)
// bossa hic return calismasin
    return (
      <>
        <PageHeader title={selectedProperty.title} />
        <Spacer />
        <PropertyDetails property={selectedProperty} />
        {/* araci props ile gonderdik y */}
        <Spacer />
    
        {/* <SwiperImageProperty images={selectedProperty.image}/> */}
    
        {isUserLogin ? (
          <>
            {/* <PropertyBookingForm property={selectedProperty} /> */}
          </>
        ) : 
        // a reservasyon bilgilerini gormek icin giris yapin uyarisi
           (
          <Container>
            <Alert variant="warning">
              <h4 className="text-center">
                Please log in to system to check the availability of the house and
                make reservation.
              </h4>
            </Alert>
          </Container>
        )}
        <Spacer />
      </>
    );
};

export default PropertyDetailsPage;

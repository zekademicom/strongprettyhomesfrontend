import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";
import PropertyDetails from "../../components/user/properties/property-details";
import Spacer from "../../components/user/common/spacer/spacer";
import PageHeader from "../../components/user/common/page-header/page-header";

export const PropertyDetailsPage = () => {
  const { propertyId } = useParams();
  const { propertyState, userState } = useStore();
  const { properties } = propertyState;
  const [selectedProperty, setSelectedProperty] = useState();
  const { isUserLogin } = userState;
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProperty = properties.filter((item) => item.id == propertyId);
    setSelectedProperty(selectedProperty[0]);
    console.log(selectedProperty);
  }, []);

  if (selectedProperty)
    return (
      <>
        <PageHeader title="property Page" />
        <Spacer />
        <PropertyDetails property={selectedProperty}/>
        <Spacer />
      </>
    );
};

export default PropertyDetailsPage;

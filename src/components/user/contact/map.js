import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11666.980239534212!2d-89.484441!3d43.025753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8807ae182b87a0f7%3A0xa5643b54610f84a5!2s2301%20Ravenswood%20Rd%2C%20Madison%2C%20WI%2053711%2C%20USA!5e0!3m2!1sen!2str!4v1655743910191!5m2!1sen!2str"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;

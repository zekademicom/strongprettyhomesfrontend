import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/user/common/page-header/page-header";
import Spacer from "../../components/user/common/spacer/spacer";
import Contact from "../../components/user/contact/contact";
import ContactForm from "../../components/user/contact/contact-form";
import Map from "../../components/user/contact/map";

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <Spacer />
      <Container>
        <Row >
          <Col md={8}><ContactForm/></Col>
          <Col md={4}><Contact/></Col>
          {/* <Spacer /> */}
          <Map />
        </Row>
      </Container>
      <Spacer />
    </>
  );
};

export default ContactPage;
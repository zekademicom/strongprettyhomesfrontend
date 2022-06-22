import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ContactForm from "./contact-form";
import "./contact.css"


const Contact = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <ContactForm />
          </Col>
          <Col md={4}>
            <Card className="contact">
              <h3>Contact Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                gravida quis libero eleifend ornare. habitasse platea dictumst.
              </p>
              <h4>Address</h4>
              <p>2301 Ravenswood Rd Madison, WI 53711</p>

              <h4>Phone</h4>
              <p>(315) 905-2321</p>

              <h4>Mail</h4>
              <p>info@strongprettyhomes.com</p>

              <h4>Follow Us</h4>
              <p>info@strongprettyhomes.com</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

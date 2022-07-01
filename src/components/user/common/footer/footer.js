import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdHouseboat} from "react-icons/md";
import {RiHome3Line,RiInformationLine,RiMapPinLine,} from "react-icons/ri";
import ContactBar from "./contact-bar";
import SocialBar from "./socialbar";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h3>About Us</h3>
            <p>
              We`re reimagining how you buy, sell and rent. It`s now easier to
              get into a place you love. So let`s do this, together.
            </p>
          </Col>
          <Col md={2} className="quicklinks">
            <h3 className="quick">Quick Links</h3>
            <ul>
              <li> <RiHome3Line />
                <Link to="/">
                  Home
                </Link>
              </li>
              <li> <MdHouseboat />
                <Link to="/properties">
                  {" "}
                  Properties
                </Link>
              </li>
              <li> <RiInformationLine />
                <Link to="/about">
                  About{" "}
                </Link>
              </li>

              <li><RiMapPinLine />
                <Link to="/contact"> 
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h3  className="quick">Contact Us</h3>
            <ContactBar />
          </Col>
          <Col md={3}>
            <h3  className="quick">Follow Us</h3>
            <SocialBar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;

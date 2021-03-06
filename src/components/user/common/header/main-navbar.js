import React , {useState}from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png";
import { MdHouseboat} from "react-icons/md";
import {RiHome3Line,RiInformationLine,RiMapPinLine,} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import "./main-navbar.css";
import UserMenu from "./user-menu";

const MainNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

const[state,setstate]= useState(false);
  const changevalueonScroll=()=>{

    const scrollvalue= document.documentElement.scrollTop;
    if(scrollvalue>100){
setstate(true);
    }else{
      setstate(false);
    }
  }
  window.addEventListener('scroll', changevalueonScroll);

  return (
    <Navbar  expand="xl" className={state ? "navbar " : "scroll"} variant="dark ">
      <Container > 
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Strong Pretty Homes" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={currentPath === "/" ? "active" : ""}
            >
              <RiHome3Line /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/properties"
              className={currentPath === "/properties" ? "active" : ""}
            >
              <MdHouseboat /> Properties
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={currentPath === "/about" ? "active" : ""}
            >
              <RiInformationLine /> About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={currentPath === "/contact" ? "active" : ""}
            >
              <RiMapPinLine /> Contact
            </Nav.Link>
                <UserMenu/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;

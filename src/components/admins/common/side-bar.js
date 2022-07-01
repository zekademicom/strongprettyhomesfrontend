import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo/logo.png";
import "./side-bar.css";
import {RiHome3Line,RiLogoutCircleRLine,RiFileEditFill,RiUser3Fill,RiCustomerService2Fill} from "react-icons/ri";
import { MdHouseboat, MdSupportAgent,MdSpaceDashboard } from "react-icons/md";
import { useStore } from "../../../store";
import alertify from "alertifyjs";
import { logout } from "../../../store/user/userActions";
import { Container, Nav, Navbar } from "react-bootstrap";


const SideBar = () => {
  const { userState, dispatchUser } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        dispatchUser(logout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("canceled");
      }
    );
  };






  return (
    <Navbar expand="lg" className="admin-navbar" variant="dark">
      <Container className="arlk">
        <Navbar.Brand as={Link} to="/admin">
          <img src={logo} className="img-fluid"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="adNvbr">
            <Nav.Link as={Link} to="/admin">
              <MdSpaceDashboard /> Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/users">
              <RiUser3Fill /> User Management
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/properties">
            <MdHouseboat/> Property Management
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/reservations">
              <RiFileEditFill /> Reservation Management
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/reservations">
            <RiCustomerService2Fill/> Agent Service
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <RiHome3Line /> Web Site
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>
              <RiLogoutCircleRLine /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
};

export default SideBar;

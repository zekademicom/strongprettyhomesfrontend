import React, { useState } from "react";
import { Card,Col,Container,Tab, Tabs, Row } from "react-bootstrap";
import "./auth.css";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const Auth = () => {
  const [defaultTab, setDefaultTab] = useState("login");

  return (

   
    <Container  className="auth" >
      <Row>
        <Col sm={4}>
        <Card>
            <Card.Body>
              <Tabs
                activeKey={defaultTab}
                onSelect={(k) => setDefaultTab(k)}
                className="mb-3"
              >
                <Tab eventKey="login" title="Login">
                  <LoginForm />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <RegisterForm setDefaultTab={setDefaultTab} />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
          
         
     
  );
};

export default Auth;

import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import {RiTeamLine, RiCommunityLine, RiGlobalFill} from "react-icons/ri";
import Stack from 'react-bootstrap/Stack';

import "./whyus.css";
import SectionHeader from "../section-header/section-header";

const WhyUs = () => {
  return (
    <section className="whyus">
      <SectionHeader
        title="Why Choose Us"
        desc="We provide full service at every step."
      />
      <Container>
        <Row>
        <Stack direction="horizontal" gap={4}>
          <Card className="col-lg-4">
            <Card.Body>
            <RiTeamLine/>
              <Card.Title>Trusted By Thousands</Card.Title>
              <Card.Text>
              Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-lg-4">
            <Card.Body>
            <RiCommunityLine/>
              <Card.Title>Wide Renge Of Properties</Card.Title>
              <Card.Text>
              Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-lg-4">
            <Card.Body>
            <RiGlobalFill/>
              <Card.Title>Financing Made Easy</Card.Title>
              <Card.Text>
              Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.
              </Card.Text>
            </Card.Body>
          </Card>
          </Stack>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;


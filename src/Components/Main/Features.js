import React from "react";
import "./styles.css";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faCar,
  faHeadset,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const WrapperDiv = styled.div`
  padding: 0 20rem;
  padding-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }
`;

const ItemWrapper = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  @media (max-width: 600px) {
    padding: 1rem 0;
  }
`;

const ItemIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
`;

const SubHeaders = styled.h5`
  margin-top: 1rem;
`;

const ParaText = styled.p`
  margin: 0;
`;

function Features() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h3 className="header-style">Why Choose Us?</h3>
      <WrapperDiv>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <ItemWrapper>
              <ItemIcon icon={faHandHoldingDollar} />
              <br />
              <SubHeaders>Affordable Pricing</SubHeaders>
              <ParaText>Best rates in market</ParaText>
            </ItemWrapper>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <ItemWrapper>
              <ItemIcon icon={faCar} />
              <br />
              <SubHeaders>Huge Fleet</SubHeaders>
              <ParaText>Plenty options</ParaText>
            </ItemWrapper>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <ItemWrapper>
              <ItemIcon icon={faHeadset} />
              <SubHeaders>Instant Support</SubHeaders>
              <ParaText>Help Anytime!</ParaText>
            </ItemWrapper>
          </Col>
          <Col lg={3} md={3} sm={12}>
            <ItemWrapper>
              <ItemIcon icon={faClipboardCheck} />
              <br />
              <SubHeaders>Easy Booking</SubHeaders>
              <ParaText>Seamless Process</ParaText>
            </ItemWrapper>
          </Col>
        </Row>
      </WrapperDiv>
    </div>
  );
}

export default Features;

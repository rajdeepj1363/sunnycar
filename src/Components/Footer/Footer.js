import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMap,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.div`
  display: block;
  background-color: #0c2c55;
  height: 300px;
  overflow: hidden;

  @media (max-width: 600px) {
    height: auto;
  }
`;

const FooterSubWrapper = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const FooterHeaders = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-left: 10px;
`;

const AnchorTag = styled.a`
  margin: auto 10px;
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Row style={{ padding: "5px", paddingBottom: "10px" }}>
        <Col lg={4} md={4} sm={12}>
          <FooterSubWrapper>
            <FooterHeaders>Find Us At</FooterHeaders>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.1283459482312!2d73.54508349999996!3d17.530727700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc207d00e63d3bf%3A0x23eebb7d8a4072f1!2sSunny%20Car%20On%20Rent!5e0!3m2!1sen!2sin!4v1778514772694!5m2!1sen!2sin"
                width={400}
                height={250}
                style={{
                  border: 0,
                  borderRadius: "25px",
                  padding: "15px",
                  margin: "0 auto",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FooterSubWrapper>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <FooterSubWrapper>
            <FooterHeaders>Contact Details</FooterHeaders>
            <div style={{ paddingLeft: "15px", margin: "0 auto" }}>
              <FontAwesomeIcon
                icon={faMap}
                style={{ color: "#ffffff", fontSize: "17px" }}
              />{" "}
              <span style={{ color: "#ffffff" }}>
                : Sunny Car, Peth, Kalambaste,
                <br />
                Chiplun, Maharashtra 415605
              </span>
              <br />
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  marginTop: "10px",
                }}
              />
              <span style={{ color: "#ffffff" }}> : +918380823555</span>
              <br />
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  color: "#ffffff",
                  fontSize: "17px",
                  marginTop: "10px",
                }}
              />
              <span style={{ color: "#ffffff" }}>
                {" "}
                : sunnycar1484@gmail.com
              </span>
            </div>
          </FooterSubWrapper>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <FooterSubWrapper>
            <FooterHeaders>Social Media</FooterHeaders>
            <div>
              <AnchorTag href="https://maps.app.goo.gl/QYQgtM94aJY5ezKg9">
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={{ color: "#ffffff", fontSize: "30px" }}
                />
              </AnchorTag>
              <AnchorTag href="https://maps.app.goo.gl/QYQgtM94aJY5ezKg9">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff", fontSize: "30px" }}
                />
              </AnchorTag>
              <AnchorTag href="https://maps.app.goo.gl/QYQgtM94aJY5ezKg9">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff", fontSize: "30px" }}
                />
              </AnchorTag>
            </div>
          </FooterSubWrapper>
        </Col>
      </Row>
    </FooterWrapper>
  );
}

export default Footer;

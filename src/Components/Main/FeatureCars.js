import {
  faGasPump,
  faGears,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import ERTIGA from "../../images/feature_cars/ertiga.png";
import INNOVA from "../../images/feature_cars/innova.png";
import SWIFT from "../../images/feature_cars/swift.png";
import "./styles.css";
import styled from "styled-components";

const WrapperDiv = styled.div`
  padding: 0 10rem;
  padding-top: 2rem;

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }
`;

const CarCard = styled(Card)`
  width: 18rem;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin: 5px auto;
  }
`;
function FeatureCars() {
  return (
    <div style={{ overflow: "hidden", display: "block", margin: "0 auto" }}>
      <h3 className="header-style">Featured Cars</h3>
      <WrapperDiv>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <CarCard>
              <Card.Img
                variant="top"
                src={ERTIGA}
                style={{ height: "325px" }}
              />
              <Card.Body>
                <Card.Title>Ertiga</Card.Title>
                <Card.Text style={{ marginTop: "15px" }}>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    7 Seater
                  </p>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faGasPump}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    Petrol
                  </p>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faGears}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    Manual Transmission
                  </p>
                </Card.Text>
              </Card.Body>
            </CarCard>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <CarCard>
              <Card.Img
                variant="top"
                src={INNOVA}
                style={{ height: "325px" }}
              />
              <Card.Body>
                <Card.Title>Innova</Card.Title>
                <Card.Text style={{ marginTop: "15px" }}>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    8 Seater
                  </p>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faGasPump}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    Diesel
                  </p>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faGears}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    Manual Transmission
                  </p>
                </Card.Text>
              </Card.Body>
            </CarCard>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <CarCard>
              <Card.Img variant="top" src={SWIFT} style={{ height: "325px" }} />
              <Card.Body>
                <Card.Title>Swift</Card.Title>
                <Card.Text style={{ marginTop: "15px" }}>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    5 Seater
                  </p>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faGasPump}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    Petrol
                  </p>
                  <p style={{ marginBottom: "3px" }}>
                    <FontAwesomeIcon
                      icon={faGears}
                      style={{ color: "#1e569f" }}
                    />{" "}
                    Automatic Transmission
                  </p>
                </Card.Text>
              </Card.Body>
            </CarCard>
          </Col>
        </Row>
      </WrapperDiv>
    </div>
  );
}

export default FeatureCars;

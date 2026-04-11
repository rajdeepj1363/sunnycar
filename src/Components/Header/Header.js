import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import car_logo from "../../images/car_logo_gold.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const HeaderBtn = styled.button`
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #d8df00;
  padding: 10px 15px;
  color: #ffffff;
  &:hover {
    color: #d8df00;
  }
`;

function Header() {
  const whatsAppText = encodeURIComponent(
    "Hello, I'd like to book car with Sunny Car!",
  );
  return (
    <Navbar expand="lg" className="navbar-styles">
      <Container>
        <Navbar.Brand className="navbar-brand-styles">
          <img src={car_logo} width="55px" style={{ marginRight: "10px" }} />
          <span className="navbar-brand-text-styles">Sunny Car</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="mx-3 navbar-link-styles">Home</Nav.Link>
            <Nav.Link className="mx-3 navbar-link-styles">Cars</Nav.Link>
            <Nav.Link className="mx-3 navbar-link-styles">Pricing</Nav.Link>
            <Nav.Link className="mx-3 navbar-link-styles">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="mx-1 my-2 navbar-link-styles">
              <HeaderBtn
                onClick={() => (window.location.href = "tel:+917030499720")}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Call Us
              </HeaderBtn>
            </Nav.Link>
            <Nav.Link className="mx-1 my-2 navbar-link-styles">
              <HeaderBtn
                onClick={() =>
                  (window.location.href = `https://wa.me/917030499720?text=${whatsAppText}`)
                }
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                WhatsApp
              </HeaderBtn>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

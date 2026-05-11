import React from "react";
import { Card, Carousel } from "react-bootstrap";
import { testimonials } from "../../constants/testimonials";
import "./styles.css";
import styled from "styled-components";

const ReviewTxt = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  font-style: italic;
  color: #f4abab;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

function Testimonials() {
  return (
    <>
      <h3 className="header-style">Customer Testimonials</h3>
      <Card
        style={{
          padding: "0 5rem",
          backgroundColor: "#3B7597",
          borderRadius: 0,
        }}
      >
        <Card.Body>
          <Carousel controls={true} indicators={true} interval={2500}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center py-5">
                  <Card
                    className="shadow border-0 text-center p-4"
                    style={{
                      width: "40rem",
                      height: "15rem",
                      borderRadius: "20px",
                    }}
                  >
                    <Card.Body>
                      <ReviewTxt>“{testimonial.review}”</ReviewTxt>

                      <h5 className="mt-4 mb-1" style={{ color: "#0f627e" }}>
                        {testimonial.name}
                      </h5>
                    </Card.Body>
                  </Card>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Card.Body>
      </Card>
    </>
  );
}

export default Testimonials;

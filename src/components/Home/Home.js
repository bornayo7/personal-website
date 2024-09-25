import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/laptop.png"; // Ensure this image aligns with your theme
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
                <span className="star" role="img" aria-labelledby="star">
                  ✨
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="imp-text-color"> Yash Baruah</strong>,
                excited to share my story with you!
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg"; // Your real photo
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m <b className="purple">Amal Ben Rabah</b>, a passionate and highly motivated
              <b className="purple"> Full Stack Developer</b>. I love turning ideas into functional,
              scalable, and user‑friendly applications.
              <br />
              <br />
              I have solid experience working with modern technologies including
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Angular, JavaScript, TypeScript, PHP, and
                  Python
                </b>
              </i>
              , as well as mobile development using
              <b className="purple"> Android Studio </b> and <b className="purple">Xamarin</b>.
              <br />
              <br />
              I enjoy building
              <i>
                <b className="purple"> Web Applications, Mobile Apps, </b>
              </i>
              and working with modern architectures like
              <b className="purple"> REST APIs, Microservices,</b> and
              <b className="purple"> Cloud‑based solutions</b>.
              <br />
              <br />
              I particularly love working with
              <b className="purple"> Spring Boot </b>, <b className="purple">Angular</b>, and
              <b className="purple"> MongoDB</b> to create reliable and efficient systems.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

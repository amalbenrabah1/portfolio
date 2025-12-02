import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./ProjectCards.css";


/* ==== ACADEMIC PROJECT IMAGES ==== */
import ecommerce from "../../Assets/Projects/ecomerce.png";
import elearning from "../../Assets/Projects/kiraya.webp";
import carRental from "../../Assets/Projects/car.png";
import computerEcom from "../../Assets/Projects/javeee.png";
import realEstate from "../../Assets/Projects/realstate.png";
import adoption from "../../Assets/Projects/pet.webp";
import salad from "../../Assets/Projects/food.png";

/* ==== MOBILE PROJECTS ==== */
import courseApp from "../../Assets/Projects/android.png";
import xamarinEcom from "../../Assets/Projects/xmarin.png";

/* ==== PROFESSIONAL EXPERIENCE ==== */
import bna from "../../Assets/Projects/bna.webp";
import sotuver from "../../Assets/Projects/sotuver.png";

/* ==== IOT ==== */
import iotPatient from "../../Assets/Projects/iot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        
        {/* ---- Academic Projects ---- */}
        <h1 className="project-heading">
          Academic <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              title="E-commerce Website"
              description="Online shopping platform built with Spring Boot and REST API following a service-oriented architecture."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              title="Gamified E-learning Platform"
              ghLink="https://github.com/amalbenrabah1/e-lerning"
              description="Interactive learning system with gamification features built using Vue.js, Spring Boot and MongoDB."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carRental}
              title="Car Rental Website"
              description="Reservation management system with client space and admin dashboard built using Symfony + MySQL."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computerEcom}
              title="Computer E-commerce (Java EE)"
              description="Complete buying platform with product management built with Java EE and MySQL."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstate}
              title="Real Estate Agency Website"
              ghLink="https://github.com/amalbenrabah1/projerhouserental"
              description="Property posting system with user management using PHP + MySQL."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adoption}
              title="Animal Adoption Website"
              ghLink="https://gihttps://github.com/amalbenrabah1/animaladoption"
              description="Web platform enabling animal adoption and shelter management using PHP + MySQL."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salad}
              title="Salad Ordering Website"
              description="Online salad ordering platform built using Angular + JsonServer."
            />
          </Col>
        </Row>

        {/* ---- Mobile Development ---- */}
        <h1 className="project-heading">
          Mobile <strong className="purple">Applications</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courseApp}
              title="Course Management App"
              isMobile={true} 
              description="Android mobile application for course management built with SQLite and Android Studio."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xamarinEcom}
              title="Mobile E-commerce App"
              isMobile={true} 
              description="Cross-platform e-commerce application using Xamarin, Spring Boot and MySQL."
            />
          </Col>
        </Row>

        {/* ---- IoT Project ---- */}
        <h1 className="project-heading">
          IoT <strong className="purple">Project</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotPatient}
              title="Patient Monitoring System"
              description="IoT system measuring heart rate, temperature, and room humidity in real time."
            />
          </Col>
        </Row>

        {/* ---- Professional Experience ---- */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bna}
              ghLink="https://github.com/amalbenrabah1/PFEBna"
              title="End-of-Studies Internship – Banque Nationale Agricole"
              description="Guarantee management platform with risk detection system. Technologies: Angular, Spring Boot, MongoDB, Flask."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sotuver}
              title="Technical Internship – SOTUVER"
              description="Development of a mold technical sheet management solution. Technologies: Angular, Bootstrap, JsonServer."
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;

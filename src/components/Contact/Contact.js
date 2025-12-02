import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import emailjs from "emailjs-com";

import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Particle from "../Particle"; // ton composant Particle déjà existant

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_feywo4k",
        "template_g0507b8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "vjhvcWzlq_N9KPWsz"
      )
      .then((response) => {
        alert("Message envoyé ! Merci de m'avoir contacté.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Erreur lors de l'envoi du message. Réessayez plus tard.");
      });
  };

  return (
    <Container fluid className="contact-section" style={{ position: "relative" }}>
      <Particle /> {/* Particles derrière le contenu */}
      <Container className="contact-container" style={{ position: "relative", zIndex: 1 }}>
        <h1 className="contact-heading">
          Contact <strong className="purple">Me</strong>
        </h1>
        <Row className="align-items-center">
          {/* Formulaire */}
          <Col md={6} className="mb-4">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Write your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="send-btn">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Infos de contact */}
          <Col md={6} className="contact-info">
            <h4>Get in touch</h4>
            <p>
              <AiOutlineMail />{" "}
              <a href="mailto:amalbenrabah04@gmail.com">amalbenrabah04@gmail.com</a>
            </p>
            <p><AiOutlinePhone /> +216 26 252 112</p>
            <p><AiOutlineEnvironment /> Tunisia</p>

            <h4>Follow Me</h4>
            <p>
              <FaGithub />{" "}
              <a href="https://github.com/amalbenrabah1" target="_blank" rel="noreferrer">
                GitHub
              </a>{" "}
              |{" "}
              <FaLinkedin />{" "}
              <a href="https://linkedin.com/in/amal-ben-rabah" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

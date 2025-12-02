import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className={props.isMobile ? "project-img-mobile" : "project-img"}
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* 👉 Afficher bouton GitHub seulement si ghLink existe */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

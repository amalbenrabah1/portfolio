import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Amal Ben Rabah</span>.
            <br/> 
            I recently graduated with a National Applied Bachelor’s Degree in Information Technologies.
            <br/>      
            Specialization: <span className="purple">Information Systems Development (DSI)</span>
            <br />
            I’m also proud to serve as a <span className="purple">Guide of the Girls Scouts</span>, helping young girls develop skills, confidence, and leadership.
            <br />
            <br />
            Outside of coding, I enjoy a variety of creative and adventurous activities that keep me inspired and energized:
          </p>

          <ul>
            
            <li className="about-activity">
              <ImPointRight />  DIY Projects 🛠️
            </li>
            <li className="about-activity">
              <ImPointRight /> Scouting and Organizing Camping Activities ⛺🌟
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking and Baking 🍰👩‍🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Volunteering 🌟
            </li>
          </ul>

      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
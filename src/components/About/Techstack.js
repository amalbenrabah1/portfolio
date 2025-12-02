import React from "react";
import { Col, Row } from "react-bootstrap";

// ALL TECH ICONS
import HTMLIcon from "../../Assets/TechIcons/HTML.webp";
import CSSIcon from "../../Assets/TechIcons/css.png";
import BootstrapIcon from "../../Assets/TechIcons/bootstrap.png";
import AngularIcon from "../../Assets/TechIcons/aangular.png";
import VueIcon from "../../Assets/TechIcons/Vue.png";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import TypescriptIcon from "../../Assets/TechIcons/Typescript.svg";
import JavaIcon from "../../Assets/TechIcons/Java.svg";
import JavaEEIcon from "../../Assets/TechIcons/javaee.jpg";
import PHPIcon from "../../Assets/TechIcons/PHP.png";
import NodeIcon from "../../Assets/TechIcons/Node.svg";
import SpringBootIcon from "../../Assets/TechIcons/Spring.png";
import SymfonyIcon from "../../Assets/TechIcons/Symfony.png";
import AndroidStudioIcon from "../../Assets/TechIcons/anndroid.png";
import XamarinIcon from "../../Assets/TechIcons/Xamarin.png";
import MySQLIcon from "../../Assets/TechIcons/musql.png";
import SQLServerIcon from "../../Assets/TechIcons/sqlserver.png";
import PL_SQLIcon from "../../Assets/TechIcons/Plsql.png";
import MongoIcon from "../../Assets/TechIcons/Mongo.svg";
import GitIcon from "../../Assets/TechIcons/Git.svg";
import DockerIcon from "../../Assets/TechIcons/Docker.svg";
import PostmanIcon from "../../Assets/TechIcons/Postman.svg";

const techs = [
  { icon: HTMLIcon, name: "HTML" },
  { icon: CSSIcon, name: "CSS" },
  { icon: BootstrapIcon, name: "Bootstrap" },
  { icon: AngularIcon, name: "Angular" },
  { icon: VueIcon, name: "Vue.js" },
  { icon: ReactIcon, name: "React.js" },
  { icon: TypescriptIcon, name: "TypeScript" },
  { icon: JavaIcon, name: "Java" },
  { icon: JavaEEIcon, name: "Java EE" },
  { icon: PHPIcon, name: "PHP" },
  { icon: NodeIcon, name: "Node.js" },
  { icon: SpringBootIcon, name: "Spring Boot" },
  { icon: SymfonyIcon, name: "Symfony" },
  { icon: AndroidStudioIcon, name: "Android Studio" },
  { icon: XamarinIcon, name: "Xamarin" },
  { icon: MySQLIcon, name: "MySQL" },
  { icon: SQLServerIcon, name: "SQL Server" },
  { icon: PL_SQLIcon, name: "PL/SQL" },
  { icon: MongoIcon, name: "MongoDB" },
  { icon: GitIcon, name: "Git" },
  { icon: DockerIcon, name: "Docker" },
  { icon: PostmanIcon, name: "Postman" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <img src={tech.icon} alt={tech.name} className="tech-icon-images" />
          <div className="tech-icons-text">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

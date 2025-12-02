import React from "react";
import { Col, Row } from "react-bootstrap";
import windows11 from "../../Assets/TechIcons/windows.png";
import chrome from "../../Assets/TechIcons/opera.png";
import vsCodeBlue from "../../Assets/TechIcons/vscode.svg"; // version classique
import vsCodePurple from "../../Assets/TechIcons/vsmauve.png"; // version mauve
import gitHub from "../../Assets/TechIcons/git.png";


function Toolstack() {
  const tools = [
    { icon: windows11, name: "Windows 11" },
    { icon: chrome, name: "Opera" },
    { icon: vsCodeBlue, name: "VS Code " },
    { icon: vsCodePurple, name: "visual studio " },
    { icon: gitHub, name: "GitHub" },

  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <img src={tool.icon} alt={tool.name} className="tech-icon-images" />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

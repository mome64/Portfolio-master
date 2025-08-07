import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiNodejs, DiReact, DiMongodb } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiBootstrap } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress title="Express.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap title="Bootstrap" />
      </Col>
    </Row>
  );
}

export default Techstack;

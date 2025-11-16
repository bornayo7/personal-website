import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiRemix,
  SiTailwindcss,
  SiMongodb,
  SiTensorflow,
  SiLatex,
  SiMysql,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Techstack() {
  return (
    <Row className="tech-row">
      <Col xs={4} md={3} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaAngular />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiRemix />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiLatex />
      </Col>
    </Row>
  );
}

export default Techstack;

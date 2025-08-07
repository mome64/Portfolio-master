import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";
import travelList from "../../Assets/travelList.jpg";
import pizzaApp from "../../Assets/pizzaApp.jpg";

import tipCalculator from "../../Assets/tipCalculator.jpg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quizzy"
              description="

An Interactive Quiz Application built with React.js and styled using Tailwind CSS. Designed to test knowledge across various topics in a fun and engaging way. Users can take timed quizzes, receive instant feedback on answers, and view their final scores"
              ghLink="https://github.com/mome64/React-Quiz"
              demoLink="https://react-quiz-xi-ashen.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="WeatherNow"
              description="WeatherNow
A sleek and simple weather forecast app built with React.js and OpenWeatherMap API. WeatherNow allows users to search for current weather conditions in any city around the world. It displays temperature, weather description, humidity, wind speed, and a matching weather icon—all in real-time."
              ghLink="https://github.com/mome64/Weather"
              demoLink="https://weather-henna-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="eCommerce"
              description="A Simple and Complete eCommerce Web Application built with React.js, Tailwind CSS, Node.js, Express, and MongoDB. It provides a smooth shopping experience with features such as user authentication, product browsing, cart management, order placement, and admin dashboard for inventory and order control."
              ghLink="https://github.com/mome64/full-ecommerce"
              demoLink="https://full-ecommerce-nine.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelList}
              isBlog={false}
              title="Travel List"
              description="A dynamic travel packing list application built with React, Vite, and Tailwind CSS. Users can add, remove, and check off items for their trips. The app features item categorization, packing progress tracking, and responsive design for seamless use on any device."
              ghLink="https://github.com/mome64/React-Vite-Tailwind-Travel-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizzaApp}
              isBlog={false}
              title="Pizza Order App"
              description="A delicious pizza ordering application created with React and Vite. Customers can browse the menu, customize their pizza with various toppings and sizes, add to cart, and place orders. Features include real-time price calculation, order history, and a clean, user-friendly interface."
              ghLink="https://github.com/mome64/react-vite-pizza"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tipCalculator}
              isBlog={false}
              title="Tip Calculator"
              description="A handy tip calculator built with React and Vite that helps users quickly determine appropriate tips for services. Features include bill amount input, customizable tip percentages, split bill functionality, and instant calculations. The minimalist design ensures ease of use for quick calculations."
              ghLink="https://github.com/mome64/Tip-Calculate"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

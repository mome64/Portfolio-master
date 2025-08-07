import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <h2>
              Hi Everyone, I am <span className="purple">Mohammed Mesoud</span>{" "}
              from <span className="purple">Kombolcha, Ethiopia.</span>
            </h2>
            <p>
              I am a passionate{" "}
              <strong className="purple">MERN Stack Developer</strong> who loves
              building modern, scalable web applications using technologies like
              MongoDB, Express.js, React.js, and Node.js.
              <br />
              <br />
              I enjoy solving real-world problems through code and continuously
              learning new tools and frameworks to improve my craft.
              <br />
              <br />
              Apart from coding, some other activities that I love to do
              include:
            </p>
            <ul>
              <li>
                📚 Reading tech blogs and staying updated on the latest trends
              </li>
              <li>🎮 Playing strategy games and puzzles</li>
              <li>🎧 Listening to podcasts and the Quran</li>
              <li>✍️ Writing about technology and development experiences</li>
            </ul>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohammed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

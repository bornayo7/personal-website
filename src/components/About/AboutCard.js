import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view card-surface">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi everyone, I'm <span className="imp-text-color">Yash Baruah</span> from
            <span className="imp-text-color"> Southlake, Texas</span>. I'm studying Computer Science at
            the University of Texas at Dallas where I focus on Artificial Intelligence and Machine
            Learning. Course projects and research sprints give me plenty of excuses to explore data
            structures, algorithms, systems, and model evaluation.
          </p>
          <p>
            I'm most energized when I get to blend <strong>Python</strong>, <strong>TensorFlow</strong>,
            and <strong>React</strong> to move an idea from dataset to prototype. That means collecting
            data, training models, monitoring experiments, and crafting the full-stack interfaces that
            make those results collaborative.
          </p>
          <ul className="about-activities">
            <li>
              <ImPointRight /> Playing games with friends
            </li>
            <li>
              <ImPointRight /> Traveling & capturing moments
            </li>
            <li>
              <ImPointRight /> Exploring emerging technologies
            </li>
          </ul>
          <p className="quote">"Strive to build things that make a difference"</p>
          <footer className="blockquote-footer">Yash Baruah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

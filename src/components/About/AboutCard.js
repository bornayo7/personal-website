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
            <span className="imp-text-color"> Southlake, Texas</span>. At UT Dallas I'm the student who
            drags a laptop to every coffee shop so I can sketch prototypes between classes. I love
            blending <strong>Java</strong>, <strong>Python</strong>, <strong>TensorFlow</strong>,
            <strong>Next.js</strong>, and <strong>Remix</strong> because it lets a sticky note idea
            become a working demo. HackUTD's ToyotaTinder, a DIY music genre classifier, and CometPark
            taught me how to gather messy datasets, tune models quickly, and polish front-ends people
            actually want to click.
          </p>
          <p>
            Outside of code I'm an Assistant Manager at Kumon, helping students stay curious while I
            keep learning how to explain tough topics clearly. Weekends usually involve road trips,
            gaming nights, or planning the next build with friends, which keeps me grounded when I'm
            chasing down bugs.
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

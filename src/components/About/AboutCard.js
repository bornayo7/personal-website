import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view card-surface about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0 about-card-text">
          <p>
            I've been hooked on technology
            since I was the kid taking gadgets apart, and UT Dallas keeps that curiosity moving
            forward every day. I love collaborating with my peers to create projects like
            ToyotaTinder, CometPark, and the music genre classifier, which have taught me many skills such as how to gather
            messy datasets, tune models, and ship front-ends that help bring these projects to life.
            
          </p>
          <p>
            Outside of coding experience, I have also been an Assistant Manager at Kumon, helping students stay curious while I
            keep learning how to explain tough topics clearly. My weekends usually involve road trips,
            gaming nights, or planning the my next projects with friends.
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

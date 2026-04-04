import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Incoming AI SWE Intern @ Nokia",
          "Researching AI for fiber optics",
          "AI SW Automation Co-op @ Nokia",
          "UT Dallas CS '26 - AI/ML projects",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

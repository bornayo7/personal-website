import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Incoming AI SW Automation Co-op",
          "Researching AI for fiber optics",
          "AI SW Automation Co-op",
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

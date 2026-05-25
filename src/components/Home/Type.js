import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Software Automation Co-op at Nokia",
          "Testing AI model workflows",
          "Validating AI release readiness",
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

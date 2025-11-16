import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Former Assistant Software Engineer @ Mashfrog",
          "HackUTD ToyotaTinder builder",
          "UT Dallas CS '26 · AI automation",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

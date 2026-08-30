import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "CS senior @ UT Dallas",
          "LLM evaluation @ Nokia, Summer '26",
          "full-stack + AI side projects",
          "graduating December 2026",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;

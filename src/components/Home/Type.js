import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Electrical Engineer",
          "Music Producer",
          "Video Editor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        pauseFor: 1200,
        delay: 25,
      }}
    />
  );
}

export default Type;

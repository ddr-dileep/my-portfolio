"use client";
import { TypeAnimation } from "react-type-animation";

const TypeTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "I am a Full Stack Developer",
        1000,
        "I am a Frontend Developer",
        2000,
        "I am a Backend Developer",
        2000,
        "I am a web developer",
        1000,
        "I am a React Developer",
        2000,
        "I am a NodeJS Developer",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "20px", fontFamily:"cursive", display: "inline-block" }}
    />
  );
};

export default TypeTextAnimation;

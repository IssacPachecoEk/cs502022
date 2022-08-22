import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Javascript Developer",
          "Master of Information Technology",
          "I've got more than 35 certificates",
          "6 years of developer experience as a Full-Stack Web.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

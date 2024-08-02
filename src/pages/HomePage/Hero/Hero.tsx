import heroImg from "../../../assets/images/hero-img.png";
import React from "react";
import Button from "./../../../components/shared/Button/Button";
const Hero: React.FC = () => {
  return (
    <section  className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 items-center gap-5 py-8 ">
      <div className="flex-1 md:text-left text-center">
        <div className="max-w-xl">
          <h2 className="lg:text-4xl text-3xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary-color  to-gray-300 inline-block text-transparent bg-clip-text">
              {" "}
              Summit!
            </span>
            <br />
            <span className="font-semibold "> Learn with Fun</span>
          </h2>
          <p className="text-gray-600 my-4">
            This is a dummy text replace this text with some meaning full text.
            This is a dummy text repeated and replace this text with some
            meaning full text{" "}
          </p>
          <a href="#contact"><Button>Contact</Button></a>
        </div>
      </div>
      <div className="flex-1">
        <figure className="flex md:flex-row-reverse">
          <img src={heroImg} className="max-w-96" alt="Hero banner image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;

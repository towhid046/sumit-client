import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import Button from "../../../components/shared/Button/Button";
import axios from "axios";
// import usePublicData from "./../../hooks/usePublicData";
// import ErrorElement from "./../../components/shared/ErrorElement/ErrorElement";
// import LoadingSpinner from "./../../components/shared/LoadingSpinner/LoadingSpinner";

interface SlideType {
  _id: string;
  img: string;
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const loadSlides = async () => {
      const { data } = await axios.get(
        "https://syncfit-server.vercel.app/slides"
      );
      setSlides(data);
    };
    loadSlides();
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 800,
    autoplaySpeed: 5000,
  };

  //   if (isError) {
  //     return <ErrorElement errorText={error} />;
  //   }
  //   if (isLoading) {
  //     return <LoadingSpinner />;
  //   }

  return (
    <section className="relative overflow-x-hidden">
      <button
        onClick={handlePrev}
        className="bg-secondary-color bg-opacity-20 p-3 rounded-full text-base-200 transition duration-300 hover:bg-primary-color hover:bg-opacity-40 left-4 lg:left-6 z-40 top-[40%] absolute"
      >
        <MdOutlineKeyboardArrowLeft className="text-2xl" />
      </button>

      <Slider className="mx-auto" ref={sliderRef} {...settings} autoplay={true}>
        {slides?.map((slide: SlideType) => (
          <div key={slide._id}>
            <div
              style={{ backgroundImage: `url(${slide.img})` }}
              className="p-5 bg-cover bg-center bg-no-repeat relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 flex flex-col justify-center items-center text-white">
                <div className="max-w-3xl mx-auto px-5 md:py-20 py-16 lg:py-36 rounded-lg">
                  <Slide direction="up">
                    <h2 className="font-bold lg:text-5xl text-4xl md:mb-4 mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-md mb-5">{slide.description}</p>

                    <Link to="/about-us">
                      <Button customClass="bg-transparent border hover:border-secondary-color">
                        About Us
                      </Button>
                    </Link>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={handleNext}
        className="bg-secondary-color bg-opacity-20 p-3 rounded-full text-base-200 transition duration-300 hover:bg-primary-color hover:bg-opacity-40 absolute right-4 lg:right-6 z-40 top-[40%]"
      >
        <MdOutlineKeyboardArrowRight className="text-2xl" />
      </button>
    </section>
  );
};

export default Hero;

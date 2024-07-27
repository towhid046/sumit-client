// src/components/Testimonials.tsx
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../../../components/unique/Review/Review";
// import LoadingSpinner from "./shared/LoadingSpinner"; // Assuming you have this component
// import ErrorElement from "./shared/ErrorElement"; // Assuming you have this component

interface ReviewType {
  _id: string;
  name: string;
  message: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const { data } = await axios.get(
          "https://syncfit-server.vercel.app/reviews"
        );
        setReviews(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   if (isError) {
  //     return <ErrorElement errorText="Failed to load reviews" />;
  //   }

  //   if (isLoading) {
  //     return <LoadingSpinner />;
  //   }

  return (
    <section className="bg-base-200 py-6">
      <h2 className="text-3xl font-bold text-center my-5">What Says Guardian</h2>
      <div className="container mx-auto px-4 lg:py-16 overflow-x-hidden ">
        <div className="slider-container">
          <Slider {...settings}>
            {reviews?.map((review) => (
              <div key={review._id}>
                <Review review={review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

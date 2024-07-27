import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Testimonials from "./Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <UpcomingEvents />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;

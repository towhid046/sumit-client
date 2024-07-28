import React from "react";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
const aboutImages = [
  "https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/939700/pexels-photo-939700.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader label="About Us" url="/about-us">
        About Us
      </PageHeader>
      <section className="py-8 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Summit Coaching</h2>
            <p className="mb-4">
              Summit Coaching is dedicated to providing top-notch educational
              support to students aiming to excel in their academic and personal
              lives. Established in 2020, our mission is to foster an
              environment where students can achieve their highest potential
              through personalized coaching, a rigorous curriculum, and a
              commitment to excellence.
            </p>
            <p className="mb-4">
              Our team of experienced educators and mentors are passionate about
              teaching and are dedicated to helping students overcome their
              academic challenges. We offer a variety of courses and programs
              tailored to meet the unique needs of each student, ensuring they
              receive the support and guidance necessary to succeed.
            </p>
            <p className="mb-4">
              At Summit Coaching, we believe in a holistic approach to
              education. We not only focus on academic success but also on the
              overall development of our students. Through various
              extracurricular activities, workshops, and counseling sessions, we
              aim to nurture well-rounded individuals who are prepared to take
              on the challenges of the future.
            </p>
            <p>
              Join us at Summit Coaching and take the first step towards a
              brighter future. Together, we can achieve greatness.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutImages.map((image, index) => (
              <img
                key={index}
                className="h-60"
                src={image}
                alt={`About Us Image ${index + 1} `}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

import React from 'react';
import { FaChalkboardTeacher, FaClock, FaUserGraduate } from 'react-icons/fa';

const features = [
  { icon: FaChalkboardTeacher, title: 'Experienced Teachers', description: 'Learn from the best in the industry.' },
  { icon: FaClock, title: 'Flexible Timings', description: 'Choose a schedule that fits your lifestyle.' },
  { icon: FaUserGraduate, title: 'Personalized Coaching', description: 'Get customized learning plans.' },
];

const Features: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center items-center flex-col text-center p-6 border rounded ">
              <feature.icon className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
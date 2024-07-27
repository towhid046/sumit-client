// src/components/Gallery.tsx
import React from "react";

const galleryImages = [
  "https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/939700/pexels-photo-939700.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
          {galleryImages.map((image, index) => (
            <div key={index} className=" overflow-hidden rounded">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 rounded hover:scale-125 transition duration-500 "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

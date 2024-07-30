import React from "react";

const TeacherCard: React.FC = () => {
  return (
    <div className="p-6 rounded border">
      <figure className="flex justify-center mb-5">
        <img
          src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="rounded-full w-32 h-32 object-cover"
          alt="Student Image"
        />
      </figure>
      <div className="space-y-1 text-center">
        <h3 className="text-gray-500 font-bold text-xl">Name: Mr. Teacher</h3>
        <h3 className="text-gray-400 text-lg font-semibold">
          Subject: Mathematic
        </h3>
        <h3 className="text-gray-400 text">Student</h3>
        <p className="text-gray-500 text-base">
          University of Dhaka, Department of Mathematic
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;

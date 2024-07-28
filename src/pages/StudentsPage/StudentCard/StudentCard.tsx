import React from "react";

const StudentCard:React.FC = () => {
  return (
    <div className="p-6 rounded border">
      <figure className="flex justify-center mb-5">
        <img src="https://images.pexels.com/photos/261895/pexels-photo-261895.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-full w-32 h-32" alt="Student Image" />
      </figure>
      <div className="space-y-1">
        <h3 className="text-gray-400 font-bold text-lg">ID: 07SUM001</h3>
        <h2 className="text-gray-600 font-bold text-xl">Name: Mr. Khan</h2>
        <h3 className="text-gray-500 text-lg font-semibold">Class: 07</h3>
        <p className="text-gray-500 text-base">
          <>Institution:</> Haji Siraz Ali School and Collage
        </p>
      </div>
    </div>
  );
};

export default StudentCard;

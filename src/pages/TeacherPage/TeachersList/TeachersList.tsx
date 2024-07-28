import React from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
const teachers = [1, 2, 3, 4, 5, 6, 7, 8, 89, 69, 39, 19, 99, 29];
const TeachersList: React.FC = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {teachers.map((student) => (
          <TeacherCard key={student} />
        ))}
      </div>
    </section>
  );
};

export default TeachersList;

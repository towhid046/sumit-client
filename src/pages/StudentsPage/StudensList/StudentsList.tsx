import React from "react";
import StudentCard from "./../StudentCard/StudentCard";
const students = [1, 2, 3, 4, 5, 6, 7, 8, 89, 69, 39, 19, 99, 29];
const StudentsList: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {students.map((student) => (
          <StudentCard key={student} />
        ))}
      </div>
    </section>
  );
};

export default StudentsList;

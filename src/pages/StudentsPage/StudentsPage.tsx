import React, { useState } from "react";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import useScrollToTop from "../../hooks/useScrollToTop";
import StudentsList from "./StudentsList/StudentsList";

interface Students {
  id: number;
  label: string;
  content: React.ReactElement;
}

const StudentsPage: React.FC = () => {
  useScrollToTop();

  const [activeTab, setActiveTab] = useState<number>(0);

  const students: Students[] = [
    {
      id: 7,
      label: "Class-7 (30)",
      content: <StudentsList className={"07"} />,
    },
    {
      id: 8,
      label: "Class-8 (40)",
      content: <StudentsList className="08" />,
    },
    {
      id: 9,
      label: "Class-9 (35)",
      content: <StudentsList className="09" />,
    },
    {
      id: 10,
      label: "Class-10 (45)",
      content: <StudentsList className="10" />,
    },
  ];

  return (
    <>
      <PageHeader url="/students" label="Students">
        Student List
      </PageHeader>
      <section className="container mx-auto py-8">
        <ul className="flex justify-center overflow-x-auto px-4 sticky top-16 py-6  bg-base-100">
          <div className="flex-grow border-b-2 border-primary-color border-opacity-50"></div>
          {students.map((student, index) => (
            <li key={student.id} className="text-gray-600 ">
              <button
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index
                    ? "text-primary-color rounded-t border-b-0 border-2"
                    : "border-b-2"
                } md:px-4 px-2.5 md:py-2 py-1.5  border-primary-color border-opacity-50 font-semibold`}
              >
                {student.label}
              </button>
            </li>
          ))}
          <div className="flex-grow border-b-2 border-primary-color border-opacity-50"></div>
        </ul>
        <div>
          <h2 className="text-center text-xl font-semibold my-8">
            {students[activeTab].content}
          </h2>
        </div>
      </section>
    </>
  );
};

export default StudentsPage;

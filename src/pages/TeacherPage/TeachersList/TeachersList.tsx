import React from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
import useToGetPublicData from "../../../hooks/useToGetPublicData";
const TeachersList: React.FC = () => {
  const {
    data: teachers,
    isLoading,
    isError,
    error,
  } = useToGetPublicData({
    queryKeyName: "teachers",
    url: "/teachers",
  });
  
  if (isLoading) {
    return (
      <div className="flex justify-center h-[50vh] items-center">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center py-12">
        <span className="text-xl font-semibold italic">{error}</span>
      </div>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {teachers?.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher._id} />
        ))}
      </div>
    </section>
  );
};

export default TeachersList;

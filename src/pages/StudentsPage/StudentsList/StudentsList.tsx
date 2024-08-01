import useToGetPublicData from "../../../hooks/useToGetPublicData";
import StudentCard from "../StudentCard/StudentCard";

interface StudentListProps {
  className: string;
}

const StudentsList = ({ className }: StudentListProps) => {
  const {
    data: studentsList,
    isLoading,
    isError,
    error,
  } = useToGetPublicData({
    queryKeyName: className,
    url: `/students/${className}`,
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
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {studentsList &&
          studentsList.map((student) => (
            <StudentCard student={student} key={student._id} />
          ))}
      </div>
    </section>
  );
};

export default StudentsList;

import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";
import useToGetPublicData from "../../../hooks/useToGetPublicData";
import StudentCard from "../StudentCard/StudentCard";
import ErrorComponent from "./../../../components/shared/ErrorComponent/ErrorComponent";

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
    return <LoadingSpinner height="50vh" size="md" />;
  }

  if (isError) {
    return <ErrorComponent error={error} />;
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
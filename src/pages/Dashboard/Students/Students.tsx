import React from "react";
import useToGetPublicData from "../../../hooks/useToGetPublicData";
import ErrorComponent from "../../../components/shared/ErrorComponent/ErrorComponent";
import LoadingSpinner from "../../../components/shared/LoadingSpinner/LoadingSpinner";
import swal from "sweetalert";
import axios from "axios";
import { toast } from "react-toastify";
import Student from "./Student/Student";

const Students: React.FC = () => {
  const {
    data: students,
    isLoading,
    isError,
    error,
    refetch,
  } = useToGetPublicData({
    queryKeyName: "students",
    url: "/students",
  });
  const handleDeleteService = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this service!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(
            `${import.meta.env.VITE_API_URL}/delete-service/${id}`
          );
          toast.success("Delete Success", {
            autoClose: 2000,
          });
          refetch();
        } catch (error) {
          swal("Error", "Something went wrong, Please try again", "error");
        }
      }
    });
  };

  if (isLoading) {
    return <LoadingSpinner height="100vh" size="md" />;
  }

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <section className="pb-16">
      <div className="overflow-x-auto">
        <div>
          <h2 className="text-xl font-semibold text-center text-gray-500 py-6">
            Total Students {students?.length}
          </h2>
        </div>
        <table className="table">
          {/* head */}
          <thead className="bg-neutral text-neutral-content">
            <tr className="text-center">
              <th>SN.</th>
              <th>Name</th>
              <th>ID</th>
              <th>Phone</th>
              <th>Class</th>
              <th>Institution</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <Student
                key={student._id}
                student={student}
                index={index + 1}
                // handleDeleteService={handleDeleteService}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Students;

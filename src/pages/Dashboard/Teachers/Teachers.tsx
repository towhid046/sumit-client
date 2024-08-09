import React from "react";
import useToGetPublicData from "../../../hooks/useToGetPublicData";

// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { swal } from "sweetalert";
import useScrollToTop from "../../../hooks/useScrollToTop";

const TeacherList = () => {
  useScrollToTop();
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
  const { user } = useAuth();

  const handleDeleteService = (id:number) => {
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
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  if (!services.length) {
    return (
      <EmptyService
        title={`You don't have Added any service Yet!`}
        url="add-service"
        btnText="Add Service"
      />
    );
  }

  return (
    <section className="pb-16">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-neutral text-neutral-content ">
              <tr className="text-center">
                <th>SN.</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <ManageService
                  key={service._id}
                  service={service}
                  index={index + 1}
                  handleDeleteService={handleDeleteService}
                />
              ))}
            </tbody>
          </table>
        </div>
    </section>
  );
};

export default TeacherList;

import React from "react";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import TeachersList from "./TeachersList/TeachersList";
import useScrollToTop from "../../hooks/useScrollToTop";

const TeacherPage: React.FC = () => {
  useScrollToTop()
  return (
    <>
      <PageHeader label="Teachers" url="/teachers">
        Teacher List
      </PageHeader>
      <section className="container mx-auto px-4 py-8">
        <TeachersList />
      </section>
    </>
  );
};

export default TeacherPage;

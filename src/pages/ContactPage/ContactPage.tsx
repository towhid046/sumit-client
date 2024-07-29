import React from "react";
import Contact from "./../HomePage/Contact/Contact";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import useScrollToTop from "../../hooks/useScrollToTop";

const ContactPage: React.FC = () => {
  useScrollToTop()
  return (
    <>
      <PageHeader url="/contact" label="Contact">
        Contact With Us
      </PageHeader>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;

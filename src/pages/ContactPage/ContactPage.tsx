import React from "react";
import Contact from "./../HomePage/Contact/Contact";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";

const ContactPage: React.FC = () => {
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

import React from "react";
import Button from "../../../components/shared/Button/Button";

const Contact: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary-color "
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary-color "
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary-color mb-2"
              rows={4}
            ></textarea>
            <Button customClass="w-full">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

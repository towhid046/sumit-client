import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import Button from "../../../components/shared/Button/Button";
import { FaExpand } from "react-icons/fa";

// import map from '../../assets/images/map.JPG'
import MapLeaflet from "./MapLeaflet/MapLeaflet";
import { useState } from "react";
import MapLeafletFull from "./MapLeafletFull/MapLeafletFull";

const contactsInfo = [
  { id: 2001, title: <MdOutlineEmail />, address: "towhidmorol46@gmail.com" },
  {
    id: 2002,
    title: <MdOutlinePhoneInTalk />,
    address: "+88 01928182891 (10 AM - 6 PM)",
  },
  { id: 2003, title: <FaSquareWhatsapp />, address: "+88 01811699726" },
  {
    id: 2004,
    title: <FaHome />,
    address: "Dhanmondi Road No-127, block-C, Dhaka, Bangladesh",
  },
];

const Contact = () => {
  const [isMapShowFull, setIsMapShowFull] = useState<boolean>(false);

  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col lg:flex-row justify-between lg:gap-10 gap-5">
          <div
            data-aos="fade-right"
            className="flex-1 flex flex-col justify-between gap-5"
          >
            <table>
              <tbody>
                {contactsInfo?.map((item) => (
                  <tr key={item.id} className="space-y-3">
                    <td className="text-xl">{item.title}</td>
                    <td className="">{item.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <MapLeaflet height="h-60" />
              <div className="relative bottom-12 left-2 z-30">
                <button
                  className="p-2 bg-white rounded-full"
                  onClick={() => setIsMapShowFull(true)}
                >
                  <FaExpand className="h-6 w-6 text-primary-color" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className={`p-5 border border-1`}>
              <form className="space-y-3">
                <div className="flex flex-col xl:flex-row items-center gap-4">
                  <div className="w-full space-y-1.5">
                    <label>
                      <strong>Your Name</strong>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-2 px-4  w-full border rounded outline-none "
                      required
                    />
                  </div>

                  <div className="w-full space-y-1">
                    <label>
                      <strong>Your Email</strong>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-2 px-4  w-full border rounded outline-none "
                      required
                    />
                  </div>
                </div>
                <div className="w-full space-y-1">
                  <label>
                    <strong>Subject</strong>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="focus:outline-none focus:border focus:border-primary-color bg-transparent py-2 px-4  w-full border rounded outline-none "
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label>
                    <strong>Message</strong>
                  </label>
                  <textarea
                    className="focus:outline-none focus:border focus:border-primary-color  bg-transparent py-2 px-4 w-full border  rounded outline-none xl:h-32 h-24"
                    required
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-control mt-6 w-full">
                  <Button customClass="w-full">Send</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {isMapShowFull && <MapLeafletFull setIsMapShowFull={setIsMapShowFull} />}
    </>
  );
};

export default Contact;

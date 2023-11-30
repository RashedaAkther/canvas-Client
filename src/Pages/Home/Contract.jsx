import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import GoogleMap from "./GoogleMap/Googlemap";

const Contract = () => {
  return (
    <div>
      <div className="flex justify-center pb-5">
        <h1 className="text-6xl w-fit text-yellow-600 font-bold border-b-4   border-yellow-600">
          Contact Us{" "}
        </h1>
      </div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="grid justify-center items-center max-w-6xl grid-cols-1 px-6 text-center mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold text-yellow-600">Get in touch</h1>
            <p className="pt-2 pb-4 text-yellow-400">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4 text-yellow-400 grid items-center justify-center text-center">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2"></FaMapMarkerAlt>
                Fake address, 9999 City
              </p>
              <p className="flex items-center">
                <FaPhone></FaPhone>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <IoIosMail></IoIosMail>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <div className="w-full">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contract;

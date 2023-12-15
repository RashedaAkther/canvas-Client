/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = ({ Review }) => {
  console.log(Review);
  return (
    <div>
      <div className="flex justify-center pb-5">
        <h1 className="text-6xl w-fit text-yellow-600 font-bold border-b-4   border-yellow-600">
          Reviews
        </h1>
      </div>
      <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          {Review?.map((rep) => (
            <div key={rep?._id} className="card shadow-xl p-5">
              <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={rep?.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col text-yellow-600 justify-center align-middle">
                  <p className="text-3xl font-semibold leadi">
                    {rep?.AgentName}
                  </p>
                  <p className="text-2xl flex">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaStarHalfAlt />
                  </p>
                </div>
              </div>
              <p className="text-yellow-400">{rep?.reviewText}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Review;

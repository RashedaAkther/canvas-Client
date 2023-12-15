import { Link } from "react-router-dom";
import useProperties from "../../Hooks/useProperties";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import axios from "axios";

const Property = () => {
  const [Properties, refetch, isLoading] = useProperties();
  const handleViewDetailsClick = async (id) => {
    console.log(id);
    try {
      // Make a POST request to update the click count
      await axios.post(`https://assignment-server-beige.vercel.app/Property/click/${id}`, );
    } catch (error) {
      console.error(error);
    }
  };
  console.log(Properties);
  return (
    <div className="grid grid-cols-3 justify-around items-center ml-20">
      {Properties?.map((pro) => (
        <div
          key={pro?._id}
          className="flex flex-col w-80 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100"
        >
          <div>
            <img
              src={pro?.image}
              alt=""
              className="object-cover rounded w-72 mb-4 h-44 sm:h-44 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl text-yellow-600 font-semibold">
              {pro?.Address}
            </h2>
            <p className="text-sm dark:text-yellow-500">{pro?.bio}...</p>
          </div>
          <div className="flex space-x-4">
            <img
              alt=""
              src={pro?.AgentPhoto}
              className="object-cover w-10 h-10 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm text-yellow-600 font-semibold"
              >
                {pro?.username}
              </a>
              <span className="text-xs dark:text-gray-400">
                {pro?.verification_status}
              </span>
            </div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 items-center justify-between">
            <Link onClick={()=>handleViewDetailsClick(pro?._id)} to={`/PropertyDetails/${pro?._id}`}>
              <button className="btn btn-xl bg-yellow-600 text-white hover:bg-yellow-500">
                Details
              </button>
            </Link>

            <button className="btn bg-yellow-600 text-white hover:bg-yellow-500">
              Review
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Property;

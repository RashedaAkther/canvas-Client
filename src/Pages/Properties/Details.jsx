import { Link,  useLoaderData } from "react-router-dom";
import Review from "../Home/Review";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Context from "../../Hooks/useContext";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
const Details = () => {
  const property = useLoaderData();
  console.log(property);
  const {user}=Context()
  // const axiosPublic = useAxiosPublic()
  // const property = axiosPublic.get(``)
  const WhistListAdd ={
    property,
    UserEmail:user?.email
  }

  const handlewhistlist = ()=>{
  axiosSecure.post(`/AddWhistList`,WhistListAdd).then(res=>{
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: " Added WhistList Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
      }
    })
   
  }
  const handleReview = (e)=>{
    e.preventDefualt;
    const form = e.target;
    const reviewText = form.reviewText.value;
    console.log(reviewText);
    const revieadd = {
    reviewText,
    AgentName: property?.username,
    email:user?.email,
    image : user?.photoURL,
    propertyId : property?._id,
    propertyTitle:property?.title
    }
    axiosSecure.post(`/AddReview`,revieadd).then(res=>{
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Review Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
      }
    })
  }


  const {
    data: Reviews,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["SingleReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`SingleReviews/${property?.id}`);
      console.log("revies in single",res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex flex-col max-w-5xlxl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div>
          <img
            src={property?.image}
            alt=""
            className="object-cover rounded w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl text-yellow-600 font-semibold">
           {property?.address}
          </h2>
          <p className="text-sm dark:text-yellow-500">
           {property?.bio}...
          </p>
          <p className="text-sm dark:text-yellow-500">
           {property?.pricerange}
          </p>

          <p className="mt-20 text-xl font-bold flex gap-2">
              {" "}
              <span className="pr-2">Viwer:</span>
              {property?.clickCount}{" "}
              <span className="pl-2 mt-1">
                <FaEye />
              </span>
            </p>
        </div>
        <div className="flex space-x-4">
          <img
            alt=""
            src={property?.AgentPhoto}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm text-yellow-600 font-semibold"
            >{property?.username}
            </a>
            <span className="text-xs dark:text-gray-400">4 hours ago</span>
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
        <div className="grid grid-cols-2 gap-2 mx-auto items-center justify-between">
          <Link
onClick={handlewhistlist}           >
            <button className="btn bg-yellow-600 text-white hover:bg-yellow-500">
              ADD TO WISHLIST
            </button>
          </Link>

          {/* <button className="btn bg-yellow-600 text-white hover:bg-yellow-500">Review</button> */}

          <button
            className="btn w-32 bg-yellow-600 text-white hover:bg-yellow-500"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Review
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
              <form onSubmit={handleReview} method="dialog">
            <div className="modal-box">
              <textarea
                className="border-2"
                name="reviewText"
                id=""
                cols="50"
                rows="10"
              ></textarea>
              <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <input type="submit" value={'Submit'} className="btn  bg-yellow-600 text-white hover:bg-yellow-500">
                   
                  </input>
              </div>
            </div>
                </form>
          </dialog>
        </div>
      </div>

      <Review Review={Reviews}></Review>
    </div>
  );
};

export default Details;

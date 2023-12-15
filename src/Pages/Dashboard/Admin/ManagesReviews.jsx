import { FaTimesCircle } from "react-icons/fa";
import useReviews from "../../../Hooks/useReviews";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManagesReviews = () => {
  const [Reviews, refetch, isLoading] = useReviews();
  console.log(Reviews);
  const axiosSecure = useAxiosSecure();

  const handleReviewDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/review/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {Reviews?.map((review) => (
        <div
          key={review?._id}
          className="max-w-xs rounded-md shadow-lg bg-yellow-50 dark:bg-gray-900 dark:text-gray-100"
        >
          <div className="grid justify-center items-center">
            <img
              src={review?.image}
              alt=""
              className="object-cover object-center w-36 rounded-full h-36 dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl text-yellow-600 font-semibold tracki">
                {review?.AgentName}
              </h2>
              <p className="text-yellow-600">{review?.email}</p>
              <p className="text-yellow-800">{review?.reviewText}</p>
            </div>
            <button
              onClick={() => handleReviewDelete(review?._id)}
              type="button"
              className=" btn flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-yellow-400 hover:bg-yellow-600 text-white dark:bg-violet-400 dark:text-gray-900"
            >
              <FaTimesCircle></FaTimesCircle> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagesReviews;

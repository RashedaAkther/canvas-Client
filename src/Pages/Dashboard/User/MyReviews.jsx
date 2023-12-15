import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import Context from "../../../Hooks/useContext";

const MyReviews = () => {
  const axiosSecure=useAxiosSecure()
  const {user}=Context()
  const { data: Reviews, refetch, isLoading} = useQuery({
    queryKey: ["myreviews"],
   queryFn: async () => {
      const res = await axiosSecure.get(`myReviews/${user?.email}`);
      console.log(res.data)
    return res.data
    },
  });
  // const  [Reviews,refetch,isLoading] =useReviews()
  console.log(Reviews);
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
     <div className="grid grid-cols-2">
{
  Reviews?.map(Review=>           <div key={Review?._Id} className="card shadow-lg w-72 p-5 text-yellow-600 font-medium">
  <p>Property tittle: {Review?.propertyTitle}</p>
  <p>Agent Name : {Review?.AgentName}</p>
  <p>Review time: {Review?.reviewTime}</p>
  <p>Review:
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-gray-700">
  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
  </svg>
    <span>{Review?.reviewText}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-gray-700">
  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
</svg>
    </p>
    <div className="flex justify-center items-center m-3">
   

        <button onClick={()=>handleReviewDelete(Review?._id)} className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Delete</button>
    </div>
</div>)
}
     </div>
    );
};

export default MyReviews;
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaTimesCircle } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Context from "../../../Hooks/useContext";
import Swal from "sweetalert2";

const RequestProperties = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = Context();
  const {
    data: RequestOffer,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["RequestOffer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`RequestOffer/${user?.email}`);
      console.log("request in single", res.data);
      return res.data;
    },
  });
  console.log(RequestOffer);

  const handleStatus = async (status, id) => {
    console.log(id);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You will not be able to undo this action.",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, update it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     axiosSecure.put(`/OfferUpdate/${id}`,
    //       status
    //       )
    //       .then((data) => {
    //         if (data?.data?.modifiedCount > 0) {
    //           Swal.fire({
    //             title: "upgrade user Successfully!",
    //             icon: "success",
    //             timer: 500, // Optional: Auto-close the modal after 2 seconds
    //             showConfirmButton: false,
    //           });
    //           refetch();
    //         }
    //       });
    //   }
    // });

    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to undo this action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      });

      if (result.isConfirmed) {
        axiosSecure.put(`/statusChange/${id}`,{
			status
		}),
        Swal.fire({
          title: "Update successful!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update status.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl text-yellow-600 font-semibold leadi">
          PROPERTY REQUEST
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-yellow-200 text-yellow-600">
              <tr className="text-left">
                <th className="p-3">Property</th>
                <th className="p-3">Title</th>
                <th className="p-3">Location</th>
                <th className="p-3">Date</th>
                <th className="p-3">Buyer Name</th>
                <th className="p-3">Buyer Email</th>

                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-yellow-600">
              {RequestOffer?.map((offer) => (
                <tr
                  key={offer?._id}
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="p-3">
                    <p>
                      <img
                        className="w-10 h-10"
                        src="https://i.ibb.co/rZz42Ck/property1.jpg"
                        alt=""
                      />
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{offer?.title}</p>
                  </td>
                  <td className="p-3">
                    <p>{offer?.location}</p>
                  </td>
                  <td className="p-3">
                    <p>{offer?.buyningDate}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{offer?.buyerName}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{offer?.buyerEmail}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>${offer?.offerAmount}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{offer?.status}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>
                      <button
                        onClick={() => handleStatus("veryfied", offer?._id)}
                        disabled={offer?.status === "veryfied"}
                        className="btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                      >
                        <FaCheck />
                      </button>
                    </p>
                    <p>
                      <button
                        onClick={() => handleStatus("pending", offer?._id)}
                        disabled={offer?.status === "pending"}
                        className="btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                      >
                        <FaTimesCircle />
                      </button>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestProperties;

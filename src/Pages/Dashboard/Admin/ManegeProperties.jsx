import { FaCheck, FaTimesCircle } from "react-icons/fa";
import useProperties from "../../../Hooks/useProperties";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Context from "../../../Hooks/useContext";

const ManegeProperties = () => {
  const [Properties, refetch, isLoading] = useProperties();
  console.log(Properties);
  const axiosSecure = useAxiosSecure();
  const { user } = Context();
  const handleStatus = async (property_status, id) => {
    console.log(property_status,id);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to undo this action.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/propertyStatus/${id}`,{property_status})
          .then((data) => {
            console.log(data);
            if (data?.data?.modifiedCount > 0) {
              Swal.fire({
                title: "upgrade user Successfully!",
                icon: "success",
                timer: 500, // Optional: Auto-close the modal after 2 seconds
                showConfirmButton: false,
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl text-yellow-600 font-semibold leadi">
          MANAGE PROPERTY
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-yellow-200 text-yellow-600">
              <tr className="text-left">
                <th className="p-3">Property</th>
                <th className="p-3">Title</th>
                <th className="p-3">Location</th>
                <th className="p-3">Agent Name</th>
                <th className="p-3">Agent Email</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-yellow-600">
              {Properties?.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="p-3">
                    <p>
                      <img className="w-10 h-10" src={p?.image} alt="" />
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{p?.bio}</p>
                  </td>
                  <td className="p-3">
                    <p>{p?.address}</p>
                  </td>
                  <td className="p-3">
                    <p>{p?.username}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-400">{p?.email}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{p?.pricerange}</p>
                  </td>
                  <td className="p-3 text-right grid gap-3 ">
                    <p
                      disabled={p?.property_status === "veryfied"}
                      onClick={() => handleStatus("veryfied", p?._id)}
                    >
                      <button className="btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm">
                        <FaCheck /> VERIFY
                      </button>
                    </p>

                    <button
                    
                      onClick={() => handleStatus("reject", p?._id)}
                      disabled={p?.property_status === "reject"}
                      className="btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                    >
                      <FaTimesCircle /> REJECT
                    </button>
                  </td>
                </tr>
              ))}

              {/* {
				Properties?.map(p=>{
					<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p><img className='w-10 h-10' src={property?.image} alt="" /></p>
					</td>
					<td className="p-3">
						<p>{}</p>
					</td>
					<td className="p-3">
						<p>{property?.address}</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right grid grid-cols-2">
                    <p><button className='btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'><FaCheck /> VERIFY</button></p>
					<p><button className='btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'><FaTimesCircle /> REJECT</button></p>
					</td>
				</tr>
				})
			}	 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManegeProperties;

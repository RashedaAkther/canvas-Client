import Swal from "sweetalert2";
import { FaTimesCircle } from "react-icons/fa";
import useUsers from "../../../Hooks/userUsers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [users, refetch, isLoading] = useUsers();
  const axiosSecure = useAxiosSecure();
  console.log(users);

  const handlePromoteUser = (role, email) => {
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
        axiosSecure
          .put(`/user-update?email=${email}`, {
            role: role,
          })
          .then((data) => {
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

  const handleFraud = (status, email) => {
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
        axiosSecure
          .put(`/user-update-status?email=${email}`, {
            status: status,
          })
          .then((data) => {
            if (data?.data?.modifiedCount > 0 || data?.data?.acknowledged) {
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

  const handleDeleteuser = (_id) => {
    console.log(_id);
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
        axiosSecure.delete(`/User/${_id}`).then((res) => {
          if (res.data.deleteCount > 0) {
            console.log(res.data.deleteCount);
            Swal.fire({
              title: "upgrade user Successfully!",
              icon: "success",
              timer: 500, // Optional: Auto-close the e
            });
            refetch()
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
                <th className="p-3">User Image</th>
                <th className="p-3">User Name</th>
                <th className="p-3">User Email</th>
                <th className="p-3">Make Admin</th>
                <th className="p-3">Make Agent</th>
                <th className="p-3">Mark as Fraud</th>
                <th className="p-3">Delete User</th>
              </tr>
            </thead>
            <tbody className="bg-yellow-50 text-yellow-600">
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <td>{index + 1}</td>
                  <td className="p-3">
                    <p>
                      <img className="w-10 h-10" src={user.image} alt="" />
                    </p>
                  </td>
                  <td className="p-3">{user?.name}</td>
                  <td className="p-3">{user?.email}</td>
                  <td className="p-3">
                    <p>
                      <button
                        onClick={() => handlePromoteUser("admin", user?.email)}
                        disabled={user?.role === "admin"}
                        className="btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                      >
                        Make Admin
                      </button>
                    </p>{" "}
                  </td>
                  <td className="p-3">
                    <p>
                      <button
                        onClick={() => handlePromoteUser("Agent", user?.email)}
                        disabled={user?.role === "Agent"}
                        className="btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                      >
                        Make Agent
                      </button>
                    </p>
                  </td>
                  <td className="p-3">
                    <p>
                      <button
                        onClick={() => handleFraud("Fraud", user?.email)}
                        disabled={user?.status === "Fruad"}
                        className="btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                      >
                        Fraud
                      </button>
                    </p>
                  </td>
                  <td className="p-3 text-right grid grid-cols-2">
                    <p>
                      <button
                        onClick={() => handleDeleteuser(user?._id)}
                        className="btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm"
                      >
                        <FaTimesCircle /> Delete
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

export default ManageUsers;

// <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
// <td className="p-3">
//           <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
// </td>
// <td className="p-3">
//   <p>Nvidia</p>
// </td>
// <td className="p-3">
//   <p>Nvidia@gmail.com</p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Admin</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Agent</button></p>

// </td>
// <td className="p-3">
//           <p><button className='btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Fraud</button></p>
// </td>

//           <td className="p-3 text-right grid grid-cols-2">

// <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'><FaTimesCircle /> Delete</button></p>
// </td>
// </tr>
// <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
// <td className="p-3">
//           <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
// </td>
// <td className="p-3">
//   <p>Nvidia</p>
// </td>
// <td className="p-3">
//   <p>Nvidia@gmail.com</p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Admin</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Agent</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Fraud</button></p>
// </td>

//           <td className="p-3 text-right grid grid-cols-2">

// <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'><FaTimesCircle /> Delete</button></p>
// </td>
// </tr>
// <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
// <td className="p-3">
//           <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
// </td>
// <td className="p-3">
//   <p>Nvidia</p>
// </td>
// <td className="p-3">
//   <p>Nvidia@gmail.com</p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Admin</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Agent</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Fraud</button></p>
// </td>

//           <td className="p-3 text-right grid grid-cols-2">

// <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'><FaTimesCircle /> Delete</button></p>
// </td>
// </tr>
// <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
// <td className="p-3">
//           <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
// </td>
// <td className="p-3">
//   <p>Nvidia</p>
// </td>
// <td className="p-3">
//   <p>Nvidia@gmail.com</p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Admin</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Make Agent</button></p>
// </td>
// <td className="p-3">
//           <p><button className='btn bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'>Fraud</button></p>
// </td>

//           <td className="p-3 text-right grid grid-cols-2">

// <p><button className='btn p-2 bg-yellow-400 text-white hover:bg-yellow-600 btn-sm'><FaTimesCircle /> Delete</button></p>
// </td>
// </tr>

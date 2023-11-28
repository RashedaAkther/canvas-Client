import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHistory,
  FaHome,
  FaList,
  FaUser,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { MdBroadcastOnHome } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import Context from "../../Hooks/useContext";
import useAdmin from "../../Hooks/useAdmin";
import useAgent from "../../Hooks/useAgent";
// import useAdmin from "../../Hooks/useAdmin";

// import Loading from "../Components/Lodding";
const Dashboard = () => {
  const { user, logOut } = Context();

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isAgent, isAgentLoading] = useAgent();

  console.log(isAdminLoading, isAdmin,isAgent);
  // const isAdmin = false;
  // if (isAdminLoading) {
  //   // Display a loading indicator while isAdmin data is being fetched
  //   return <p></p>;
  // }
  // if (!isVolunteerLoading) {
  //   // Display a loading indicator while isAdmin data is being fetched
  //   return <Loading></Loading>
  // }

  return (
    <div className="grid grid-cols-5 md:grid-cols-3  ">
      {/* dashboard side bar */}
      


      <div className="col-span h-[100vh] md:col-end-2 bg-indigo-400 lg:w-fit">
  <ul className="menu p-4">
    {isAdmin?.isAdmin ? (
     <div>
              <li>
                <NavLink to="/dashboard/AdminProfile">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AddItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/ManageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Booking">
                  <FaBook></FaBook>
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/Users">
                  <FaUser></FaUser>
                  All Users
              
                  </NavLink>
                  </li>
                </div>
    ) : isAgent?.isAgent ? (
      <div className=" md ">
      <li>
        <NavLink to="/Dashboard/UserProfile">
          <FaHome></FaHome>
          My Profile
        </NavLink>
      </li>

      <li className="mb-2">
        <NavLink to="/dashboard/donationRequest">
          <FaHistory></FaHistory>
          My Donation Request
        </NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard/CreateDonation">
          <FaAd className=" text-xl"></FaAd>
          Create Donation Request
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/bookings">
          <FaList></FaList>
          My Bookings
        </NavLink>
      </li>
      <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
        <img
          src={user?.photoURL}
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">{user?.name}</h2>
          <span className="flex items-center space-x-1">
            <Link
              to={"UserProfile"}
              rel="noopener noreferrer"
              className="text-xs hover:underline dark:text-gray-400"
            >
              View profile
            </Link>
          </span>
        </div>
      </div>
    </div>
    ) : (
      <div className=" md ">
                    <li>
                      <NavLink to="/Dashboard/UserProfile">
                        <FaHome></FaHome>
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                        Reservation
                      </NavLink>
                    </li>
    
                    <li className="mb-2">
                      <NavLink to="/dashboard/donationRequest">
                        <FaHistory></FaHistory>
                        My Donation Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Dashboard/CreateDonation">
                        <FaAd className=" text-xl"></FaAd>
                        Create Donation Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/bookings">
                        <FaList></FaList>
                        My Bookings
                      </NavLink>
                    </li>
                    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                      <img
                        src={user?.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-lg dark:bg-gray-500"
                      />
                      <div>
                        <h2 className="text-lg font-semibold">{user?.name}</h2>
                        <span className="flex items-center space-x-1">
                          <Link
                            to={"UserProfile"}
                            rel="noopener noreferrer"
                            className="text-xs hover:underline dark:text-gray-400"
                          >
                            View profile
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
    )}

    <div className="divider"></div>
    <li>
      <NavLink to="/">
        <FaHome></FaHome>
        Home
      </NavLink>
    </li>
    {!isAdmin?.isAdmin && (
      <li onClick={logOut} className="rounded-sm">
        <a
          rel="noopener noreferrer"
          className="flex items-center p-2 space-x-3 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current dark:text-gray-400"
          >
            {/* Logout icon path */}
          </svg>
          <span>Logout</span>
        </a>
      </li>
    )}
    <li>
      <NavLink to="/order/contact">
        <FaVoicemail></FaVoicemail>
        Contact
      </NavLink>
    </li>
  </ul>
</div>

      {/* dashboard content */}
      <div className="col-span-3 lg:-ml-28 md:col-span-2 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

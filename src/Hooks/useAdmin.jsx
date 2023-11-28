import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import Context from "./useContext";


const useAdmin = () => {
  const { user } = Context();
  // const [admin,setAdmin]=useState()
  const axiosSecure = useAxiosSecure();
  // const AxiosPublic = useAxiosPublic();
  console.log(user);
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["requestAdmin", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user?.email}`);
      console.log("admin use", res.data);
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;




{/* <div className=" col-span h-[100vh] md:col-end-2 bg-indigo-400 lg:w-fit ">
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
              ) : (
                (
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
                )
                ||
                (isAgent?.isAgent && (
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
                ))
              )}
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome>
                  Home
                </NavLink>
              </li>
              {isAdmin?.isAdmin || (
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
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
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
          </div> */}
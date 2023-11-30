import {
  FaAd,

  FaHistory,
  FaHome,
  FaList,
  FaRegUser,
  
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import {  CiViewList } from "react-icons/ci";
import { MdBookmarkAdded, MdManageAccounts, MdManageHistory } from "react-icons/md";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { GiRainbowStar } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
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
      


      <div className="col-span h-[100vh] md:col-end-2 text-white font-semibold bg-yellow-600  lg:w-fit">
  <ul className="menu p-4">
    {isAdmin?.isAdmin ? (
     <div>
              <li>
                <NavLink to="/Dashboard/AdminProfile">
                <FaRegUser className="text-xl"></FaRegUser>
                  ADMIN PROFILE
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/AdminManagesProperties">
                <MdManageHistory className="text-2xl"></MdManageHistory>
                 MANAGE PROPERTIES
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/AdminManagesUsers">
                <MdManageAccounts className="text-2xl"></MdManageAccounts>
                 MANAGE USERS
                </NavLink>
              </li>
              <li>
                <NavLink to="/Dashboard/AdminManagesReviews">
                <GiRainbowStar className="text-2xl"></GiRainbowStar>
                 MANAGE RERIEWS
                </NavLink>
              </li>
           
                </div>
    ) : isAgent?.isAgent ? (
      <div className=" md ">
      <li>
        <NavLink to="/Dashboard/AgentProfile">
        <CgProfile />
          PROFILE
        </NavLink>
      </li>

      <li className="mb-2">
        <NavLink to="/Dashboard/AgentAddedProperties">
        <MdBookmarkAdded />
          MY ADDED PROPERTIES
        </NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard/AgentSoldProperties">
        <HiMiniClipboardDocumentList className="text-xl font-bold"></HiMiniClipboardDocumentList>
          MY SOLD PROPERTIES
        </NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard/AgentRequestProperties">
          <FaList></FaList>
          REQUESTED PROPERTIES
        </NavLink>
      </li>
      <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
        <img
          src={user?.photoURL}
          alt=""
          className="w-12 h-12 rounded-lg dark:bg-gray-500"
        />
        {/* <div>
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
        </div> */}
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
                      <NavLink to="/Dashboard/UserWhistlist">
                      <CiViewList />

                        WISHLIST
                      </NavLink>
                    </li>
    
                    <li className="mb-2">
                      <NavLink to="/Dashboard/PropertyBought">
                        <FaHistory></FaHistory>
                       BOUGHT PROPERTIES
                      </NavLink>
                    </li>
                   
                    <li>
                      <NavLink to="/Dashboard/MyReviews">
                        <FaList></FaList>
                        MY REVIEWS
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
        <FaHome className="text-2xl"></FaHome>
        Home
      </NavLink>
    </li>
   
      <li onClick={logOut} className="rounded-sm">
        <a
          rel="noopener noreferrer"
          className="flex items-center m-2 p-2 space-x-3 rounded-md"
        >
         <LuLogOut className="text-2xl"></LuLogOut>
            {/* Logout icon path */}
         
          <span>Logout</span>
        </a>
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

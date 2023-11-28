import { createBrowserRouter } from "react-router-dom";
import MainLyout from "../Layouts/MainLyout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Properties from "../Pages/Properties/Properties";
import AddProperties from "../Pages/Addproperties/AddProperties";
import Details from "../Pages/Properties/Details";
import Dashboard from "../Pages/Dashboard/Dashboard";
// import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";

import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile";
import UserProfile from "../Pages/Dashboard/User/UserProfile";
import Whistlist from "../Pages/Dashboard/User/Whistlist";
import ManegeProperties from "../Pages/Dashboard/Admin/ManegeProperties";
import ManagesReviews from "../Pages/Dashboard/Admin/ManagesReviews";
import MyReviews from "../Pages/Dashboard/User/MyReviews";
import AgentSoldProperties from "../Pages/Dashboard/Agent/AgentSoldProperties";
import PropertyBought from "../Pages/Dashboard/User/PropertyBought";
import AgentAddedProperties from "../Pages/Dashboard/Agent/AgentAddedProperties";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";
// import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout></MainLyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "Properties",
        element: <Properties></Properties>,
      },
      {
        path: "add-properties",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "property-details",
        element: <Details></Details>,
      },
    ],
  },

  {
    path: "Dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/Dashboard/AdminProfile",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "/Dashboard/AgentProfile",
        element: (
          <PrivateRoute>
            <AgentRoute>
              <AgentProfile></AgentProfile>
            </AgentRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/UserProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/AdminManagesUsers",
        element: (
          <PrivateRoute>
            {/* <AdminRoute> */}
            <ManageUsers></ManageUsers>
            {/* </AdminRoute> */}
          </PrivateRoute>
        ),
      },

      // {
      //   path:'/Dashboard',
      //   element:<VolunteerRoute><Dashboard></Dashboard> </VolunteerRoute>
      // },
      {
        path: "/Dashboard/UserWhistlist",
        element: (
          <PrivateRoute>
            <Whistlist></Whistlist>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/Dashboard/CreateDonation",
      //   element: (
      //     <PrivateRoute>
      //       <></DonationRequestForm>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/Dashboard/UserProperties",
        element: (
          <PrivateRoute>
            <Properties></Properties>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/AllManageProperties",
        element: (
          <PrivateRoute>
            <ManegeProperties></ManegeProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/AllManageProperties",
        element: (
          <PrivateRoute>
            <ManegeProperties></ManegeProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/ManagesReviews",
        element: (
          <PrivateRoute>
            <ManagesReviews></ManagesReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/MyReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/AgentSoldProperties",
        element: (
          <PrivateRoute>
            <AgentSoldProperties></AgentSoldProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/PropertyBought",
        element: (
          <PrivateRoute>
            <PropertyBought></PropertyBought>
          </PrivateRoute>
        ),
      },
      {
        path: "/Dashboard/AgentAddedProperties",
        element: (
          <PrivateRoute>
            <AgentAddedProperties></AgentAddedProperties>
          </PrivateRoute>
        ),
      },
    ],
  },
  
]);

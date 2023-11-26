import { createBrowserRouter } from "react-router-dom";
import MainLyout from "../Layouts/MainLyout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Properties from "../Pages/Properties/Properties";
import AddProperties from "../Pages/Addproperties/AddProperties";
import Details from "../Pages/Properties/Details";


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
        path:"login",
        element:<Login></Login>,
      },
      {
        path:"signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"Properties",
        element:<Properties></Properties>
      },
      {
        path:"add-properties",
        element:<AddProperties></AddProperties>
      },
      {
        path:"property-details",
        element:<Details></Details>
      }
    ],
  },
]);
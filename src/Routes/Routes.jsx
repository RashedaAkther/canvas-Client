import { createBrowserRouter } from "react-router-dom";
import MainLyout from "../Layouts/MainLyout";
import Home from "../Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout></MainLyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
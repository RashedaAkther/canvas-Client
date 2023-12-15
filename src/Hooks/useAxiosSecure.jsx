/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";


import { useNavigate } from "react-router-dom";
import Context from "./useContext";

export const axiosSecure = axios.create({
  baseURL: "https://assignment-server-beige.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = Context();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        // console.log(res);
        return res;
      },
      (error) => {
        console.log('error tracked in the interceptor', error)
        if (error.response.status === 401 || error.response.status === 403) {
          // console.log('logout the user')
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) =>
             console.log(error)
             );
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
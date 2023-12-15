import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const AxiosPublic = axios.create({
  baseURL: "https://assignment-server-beige.vercel.app",
  withCredentials: "true",
});
const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
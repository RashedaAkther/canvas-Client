// import { useQuery } from "@tanstack/react-query";

// import useAxiosSecure from "./useAxiosSecure";
// import Context from "./useContext";


// const useAdmin = () => {
//   const { user } = Context();
//   // const [admin,setAdmin]=useState()
//   const axiosSecure = useAxiosSecure();
//   // const AxiosPublic = useAxiosPublic();
//   console.log(user);
//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     queryKey: ["requestAdmin", user?.email],

//     queryFn: async () => {
//       const res = await axiosSecure.get(`/admin/${user?.email}`);
//       console.log("admin use", res.data);
//       return res.data;
//     },
//   });
//   return [isAdmin, isAdminLoading];
// };

// export default useAdmin;
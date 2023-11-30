import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useAdminProperty = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews, refetch, isLoading} = useQuery({
        queryKey: ["AdminProperties"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get("/AdminProperties");
          console.log(res.data)
        return res.data
        },
      });
    return ([reviews,refetch,isLoading])
};

export default useAdminProperty;
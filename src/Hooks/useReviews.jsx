import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: Reviews, refetch, isLoading} = useQuery({
        queryKey: ["AdminReviews"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get("/AdminReviews");
          console.log(res.data)
        return res.data
        },
      });
    return ([Reviews,refetch,isLoading])
};

export default useReviews;
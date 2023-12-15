import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: Reviews, refetch, isLoading} = useQuery({
        queryKey: ["Reviews"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get("/Reviews");
          console.log(res.data)
        return [Reviews,refetch,isLoading]
        },
      });
    return ([Reviews,refetch,isLoading])
};

export default useReviews;
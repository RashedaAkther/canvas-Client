import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useProperties = () => {
    const axiosSecure = useAxiosSecure()
    const { data: Properties, refetch, isLoading} = useQuery({
        queryKey: ["Properties"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get("/Properties");
          console.log(res.data)
        return res.data
        },
      });
    return ([Properties,refetch,isLoading])
};

export default useProperties;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Context from "./useContext";



const useAgentSoldProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {user}=Context()
    const { data: Properties, refetch, isLoading} = useQuery({
        queryKey: ["AgentSoldProperties"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/AgentSoldProperties/${user?.email}`);
          console.log(res.data)
        return res.data
        },
      });
    return ([Properties,refetch,isLoading])
};

export default useAgentSoldProperties;
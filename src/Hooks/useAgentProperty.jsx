import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Context from "./useContext";



const useAgentProperties = () => {
    const axiosSecure = useAxiosSecure()
    const {user}=Context()
    const { data: Properties, refetch, isLoading} = useQuery({
        queryKey: ["AgentProperties"],
        // enabled:!isLoading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/AgentProperties/${user?.email}`);
          console.log(res.data)
        return res.data
        },
      });
    return ([Properties,refetch,isLoading])
};

export default useAgentProperties;
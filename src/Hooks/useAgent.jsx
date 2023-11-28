import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import Context from "./useContext";

const useAgent = () => {
  const { user } = Context();

  const axiosSecure = useAxiosSecure();

  console.log(user);
  const { data: isAgent, isLoading: isAgentLoading } = useQuery({
    queryKey: ["requestAgent", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/Agent/${user?.email}`);
      console.log("Agent use", res.data);
      return res.data;
    },
  });
  return [isAgent, isAgentLoading];
};

export default useAgent;

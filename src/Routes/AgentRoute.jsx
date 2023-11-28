/* eslint-disable react/prop-types */


import { Navigate, useLocation } from "react-router-dom";
import Context from "../Hooks/useContext";
import useAgent from "../Hooks/useAgent";



const AgentRoute = ({children}) => {
  const { user, loading } = Context();
  const [isAgent,isAgentLoading]=useAgent()
  console.log(isAgent,isAgentLoading);
  const location = useLocation();
  console.log(location);
  if (loading||isAgentLoading)
    return (
      <div className="flex justify-center items-center mx-auto mt-20">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );

  if (user && isAgent?.isAgent) {
      return children;
}
return <Navigate to="/" state={location.pathname} replace  />;

};

export default AgentRoute;

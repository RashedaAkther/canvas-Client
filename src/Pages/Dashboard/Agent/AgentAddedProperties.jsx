import Swal from "sweetalert2";
import useAgentProperties from "../../../Hooks/useAgentProperty";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AgentAddedProperties = () => {
  const [Properties,refetch,isLoading] =useAgentProperties()
  console.log(Properties);
const axiosSecure=useAxiosSecure()
  const handlePropertyDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/agentProperty/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
    return (
        <div className="grid grid-cols-2">
           {
            Properties?.map(Property=>
            <div key={Property._id} className="card grid grid-cols-3 gap-2 bottom-2 bg-yellow-50">
          <div>
            <figure>
              <img
                className="w-full lg:h-[150px] m-2 rounded object-cover"
                src={Property?.image}
                alt=""
              />
            </figure>

           
                </div>
                
               <div className="grid justify-center items-center">
               <p className="text-xl font-semibold">Price Range:{Property?.pricerange}</p>
                <p >{Property?.address}</p>
               </div>

               <div className="grid justify-center items-center">
                <button className="btn bg-yellow-400 text-white hover:bg-yellow-600">Edit</button>
                <button onClick={()=>handlePropertyDelete(Property?._id)} className="btn bg-yellow-400 text-white hover:bg-yellow-600">Delete</button>
               </div>
        </div>
              )
           }
        </div>
    );
};

export default AgentAddedProperties;
import useAgentProperties from "../../../Hooks/useAgentProperty";

const AgentAddedProperties = () => {
  const [Properties,refetch,isLoading] =useAgentProperties()
  console.log(Properties);
    return (
        <div className="grid grid-cols-2">
           {
            Properties?.map(Property=>
            <div key={Property._id} className="card grid grid-cols-3 gap-2 bottom-2 bg-yellow-50">
          <div>
            <figure>
              <img
                className="w-full lg:h-[150px] m-2 rounded object-cover"
                // src={Property?.}
                alt=""
              />
            </figure>

           
                </div>
                
               <div className="grid justify-center items-center">
               <p className="text-xl font-semibold">Price Range:$00-$00</p>
                <p >Khan Mansion, 37/C, Road, 01 S Khulshi</p>
               </div>

               <div className="grid justify-center items-center">
                <button className="btn bg-yellow-400 text-white hover:bg-yellow-600">Edit</button>
                <button className="btn bg-yellow-400 text-white hover:bg-yellow-600">Delete</button>
               </div>
        </div>
              )
           }
        </div>
    );
};

export default AgentAddedProperties;
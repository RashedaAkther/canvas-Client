import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Context from "../../../Hooks/useContext";

const PropertyBought = () => {
  const { user } = Context();
  const axiosSecure = useAxiosSecure();
  const {
    data: UserRequestOffer,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["UserRequestOffer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/UserRequestOffer/${user?.email}`);
      console.log("reviews in single", res.data);
      return res.data;
    },
  });
  console.log(UserRequestOffer);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7">
      {UserRequestOffer?.map((offer) => (
        <div
          key={offer?._id}
          className="card shadow-lg h-96 w-72 p-5 text-yellow-600 font-medium"
        >
          <img
            className="h-44 rounded-lg"
            src="https://i.ibb.co/rZz42Ck/property1.jpg"
            alt=""
          />
          <p>{offer?.title}</p>
          <p>{offer?.location}</p>
          <p className="justify-center items-center grid">Jhon Deol</p>

          <div className="flex gap-5 ">
            <p >
       
              Status: {offer?.status}
            </p>
            <p>Price:{offer?.offerAmount}</p>
          </div>
          <div className="flex gap-5 m-3">
            <button disabled={offer?.status === "pending"} className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">
              Pay
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyBought;

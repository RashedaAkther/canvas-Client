import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Context from "../../../Hooks/useContext";
import Swal from "sweetalert2";

const Whistlist = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = Context();
  const {
    data: WhistList,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["myWhistList"],
    queryFn: async () => {
      const res = await axiosSecure.get(`UserWhistList/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(WhistList);
  const handleOfferSubmit = (e, propertyId,image) => {
    e.preventDefault();

    const form = e.target;
    const tiitle = form.title.value;
    const agentName = form.agentName.value;
    const agentemail = form.agentEmail.value;
    const location = form.location.value;
    const offerAmount = form.offerAmount.value;
    const buyerEmail = form.buyerEmail.value;
    const buyerName = form.buyerName.value;
    const buyingDate = form.buyingDate.value;
    const Offeradd = {
      tiitle,
      agentName,
      agentemail,
      location,
      buyerEmail,
      buyerName,
      buyingDate,
      offerAmount,
      status: "pending",
      propertyId,
      image
    };
    console.log(Offeradd, propertyId);
    axiosSecure.post(`/AddOffer`, Offeradd).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Make Offer Successfully",
          icon: "success",
          confirmButtonText: "Done",
        });
      }
    });
  };
  const handleDeletewhistList = (_id) => {
    console.log(_id);
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
        axiosSecure.delete(`/WhistList/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "delete Successfully!",
              icon: "success",
              timer: 500, // Optional: Auto-close the e
            });
          }
          refetch();
        });
      }
    });
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      {WhistList?.map((whis) => (
        <div
          key={whis?.property?._id}
          className="card shadow-lg h-96 w-72 p-5 text-yellow-600 font-medium"
        >
          <img className="h-44 rounded-lg" src={whis?.property?.image} alt="" />
          <p>{whis?.property?.title}</p>
          <p>{whis?.property?.address}</p>
          <div className=" flex gap-5 ">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={whis?.property?.agentimage}
              alt=""
            />
            <p className="justify-center items-center grid">
              {whis?.property?.username}
            </p>
          </div>
          <div className="flex gap-5 ">
            <p> Status: {whis?.property?.verification_sataus}</p>
            <p>Price:{whis?.property?.pricerange}</p>
          </div>
          <div className="flex gap-5 m-3">
            <button
              className="btn  bg-yellow-400 text-white font-semibold hover:bg-yellow-600"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Make Offer
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form
                  onSubmit={(e) => handleOfferSubmit(e, whis?.property?._id,whis?.property?.image)}
                  className="grid grid-cols-2 "
                >
                  <div>
                    <label htmlFor="property-name">Property Name</label>
                    <input
                      className="border-2"
                      name="title"
                      readOnly
                      defaultValue={whis?.property?.title}
                      type="text"
                    />
                    <label htmlFor="property-location">Property Location</label>
                    <input
                      className="border-2"
                      type="text"
                      name="location"
                      readOnly
                      defaultValue={whis?.property?.address}
                    />
                    <label htmlFor="agent-name">Agent Name</label>
                    <input
                      className="border-2"
                      type="text"
                      name="agentName"
                      readOnly
                      defaultValue={whis?.property?.username}
                    />
                    <label htmlFor="agent-name">Agent Email</label>
                    <input
                      className="border-2"
                      type="text"
                      name="agentEmail"
                      readOnly
                      defaultValue={whis?.property?.email}
                    />
                    <label htmlFor="offer-amount">Offered amount</label>
                    <input
                      className="border-2"
                      name="offerAmount"
                      type="text"
                    />
                  </div>
                  <div>
                    <label htmlFor="buyer-email">Buyer Email</label>
                    <input
                      className="border-2"
                      name="buyerEmail"
                      readOnly
                      defaultValue={user?.email}
                      type="email"
                    />
                    <label htmlFor="buyer-name">Buyer Name</label>
                    <input
                      className="border-2"
                      type="text"
                      name="buyerName"
                      readOnly
                      defaultValue={user?.displayName}
                    />
                    <label htmlFor="buying-date">Buying Date</label>
                    <input className="border-2" name="buyingDate" type="date" />
                  </div>
                  <div>
                    <button method="dialog" className="grid grid-cols-2 gap-5">
                      <input
                        type="submit"
                        value={"Offer"}
                        className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600"
                      ></input>
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">
                        Close
                      </button>
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <button
              onClick={() => handleDeletewhistList(whis?._id)}
              className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Whistlist;



const Whistlist = () => {



    return (
        <div className="grid grid-cols-2 gap-5">
        <div className="card shadow-lg h-96 w-72 p-5 text-yellow-600 font-medium">
            <img className="h-44 rounded-lg" src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" />
            <p>Banglow</p>
            <p>khulshi</p>
            <div className=" flex gap-5 ">
            <img className="w-12 h-12 object-cover rounded-full" src="https://i.ibb.co/BVfNxdQ/portrait-beautiful-young-girl-posing-23-2148431229.jpg" alt="" />
            <p className="justify-center items-center grid">Jhon Deol</p>
            </div> 
            <div className="flex gap-5 ">
            <p> Status: Verified</p>
            <p>Price:$0-$0</p>
            </div>
            <div className="flex gap-5 m-3">
            <button className="btn  bg-yellow-400 text-white font-semibold hover:bg-yellow-600" onClick={()=>document.getElementById('my_modal_5').showModal()}>Make Offer</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
 <form className="grid grid-cols-2">
  <div>
  <label htmlFor="property-name">Property Name</label>
    <input className="border-2" type="text" />
    <label htmlFor="property-location">Property Location</label>
    <input className="border-2" type="text" />
    <label htmlFor="agent-name">Agent Name</label>
    <input className="border-2" type="text" />
    <label  htmlFor="offer-amount">Offered amount</label>
    <input className="border-2" type="text" />
  </div>
<div>
<label htmlFor="buyer-email">Buyer Email</label>
    <input className="border-2" type="text" />
    <label htmlFor="buyer-name">Buyer Name</label>
    <input className="border-2" type="text" />
    <label htmlFor="buying-date">Buying Date</label>
    <input className="border-2" type="text" />
</div>
 </form>
    <div className="modal-action">
      <form method="dialog" className="grid grid-cols-2 gap-5">
        <button className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Offer</button>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Close</button>
      </form>
    </div>
  </div>
</dialog>
                <button className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Remove</button>
            </div>
        </div>
        <div className="card shadow-lg h-96 w-72 p-5 text-yellow-600 font-medium">
            <img className="h-44 rounded-lg" src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" />
            <p>Banglow</p>
            <p>khulshi</p>
            <div className=" flex gap-5 ">
            <img className="w-12 h-12 object-cover rounded-full" src="https://i.ibb.co/BVfNxdQ/portrait-beautiful-young-girl-posing-23-2148431229.jpg" alt="" />
            <p className="justify-center items-center grid">Jhon Deol</p>
            </div> 
            <div className="flex gap-5 ">
            <p> Status: Verified</p>
            <p>Price:$0-$0</p>
            </div>
            <div className="flex gap-5 m-3">
                {/* <button  className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Make Offer</button> */}
                <button className="btn  bg-yellow-400 text-white font-semibold hover:bg-yellow-600" onClick={()=>document.getElementById('my_modal_5').showModal()}>Make Offer</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<button className="btn  bg-yellow-400 text-white font-semibold hover:bg-yellow-600" >Remove</button>

            </div>
        </div>
        </div>
    );
};

export default Whistlist;
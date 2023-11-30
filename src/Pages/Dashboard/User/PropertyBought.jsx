
const PropertyBought = () => {
    return (
        <div>
             <div className="card shadow-lg h-96 w-72 p-5 text-yellow-600 font-medium">
            <img className="h-44 rounded-lg" src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" />
            <p>Banglow</p>
            <p>khulshi</p>
            <p className="justify-center items-center grid">Jhon Deol</p>
           
            <div className="flex gap-5 ">
            <p> Status: Accepted</p>
            <p>Price:$0-$0</p>
            </div>
            <div className="flex gap-5 m-3">
           

                <button className="btn bg-yellow-400 text-white font-semibold hover:bg-yellow-600">Pay</button>
            </div>
        </div>
        </div>
    );
};

export default PropertyBought;
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Context from "../../Hooks/useContext";
import axios from "axios";
const api_key ="cb6b3a1f2b26ed9b54559cadceda27ec"


const AddProperties = () => {
  const AxiosPublic = useAxiosPublic();
  const { user } = Context();
  const handlesumbite = async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData();

    const firstname = form.firstname.value;

  
    const image =e.target.image.files[0]

    formData.append("image", image);
    // console.log(image);
    const { data } = await axios.post(
     ` https://api.imgbb.com/1/upload?key=${api_key}`,
      formData
    );
    console.log(data.data.display_url);
    const agentimage=user?.displayURL
    const imagedata= data.data.display_url
    const pricerange = form.price.value;
    const title = form.title.value;
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const username = form.username.value;
    const email = form.email.value;
    const bio = form.bio.value;
    title

    const NewFood = {
      verification_sataus:'veryfied',
    property_status : 'sell',
      agentimage,
    firstname  ,
image:imagedata,
    pricerange,
    address,
    city,
    state,
    zip,
    title,
    username,
    email,
    bio,
    AgentPhoto :user?.photoURL
    };

    console.log(NewFood);
    AxiosPublic.post(`/AddProperty/${user?.email}`, 
      NewFood,
  )

     
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };


  
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={handlesumbite}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-yellow-600  italic">
                Property Inormation
              </p>
              <p className="text-xs">
                Financial solutions into superior design and quality building
                materials under one roof. Easy Build was designed to build your
                valuable property
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Property name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
              <label className="text-sm text-yellow-600 font-semibold italic">
                  Property img
                </label>
                <input
                  id=""
                  name="image"
                  type="file"
                  placeholder="https:/"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Price Range
                </label>
                <input
                  id="price-range"
                  name="price"
                  type="text"
                  placeholder="$00-$00"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Price Range
                </label>
                <input
                  id="Title"
                  name="title"
                  type="text"
                  placeholder="title"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Property Location
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  City
                </label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  State / Province
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-yellow-600  italic">Agent Profile</p>
              <p className="text-xs"></p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  defaultValue={user?.displayName
                  }
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Email 1
                </label>
                <input
                  id="website"
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  placeholder=""
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="w-10 h-10 rounded-full  dark:bg-gray-700"
                  />
                  <input
                    type="submit"
                    value={"Add Property"}
                    className="px-4 py-2 border bg-yellow-400 text-white hover:bg-yellow-600 hover:border-b-2 border-white rounded-md dark:border-gray-100"
                  ></input>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddProperties;

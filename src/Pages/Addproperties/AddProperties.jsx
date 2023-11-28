



const AddProperties = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form action="" className="container flex flex-col mx-auto space-y-12">
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
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Price Range
                </label>
                <input
                  id="price-range"
                  type="text"
                  placeholder="$00-$00"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Property Location
                </label>
                <input
                  id="address"
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
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://"
                  className="w-full rounded-md border-2 border-yellow-400 p-2 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm text-yellow-600 font-semibold italic">
                  Bio
                </label>
                <textarea
                  id="bio"
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
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border bg-yellow-400 text-white hover:bg-yellow-600 hover:border-b-2 border-white rounded-md dark:border-gray-100"
                  >
                    ADD PROPERTY
                  </button>
                
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

import { Helmet } from "react-helmet-async";

import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Context from "../Hooks/useContext";
const api_key ="cb6b3a1f2b26ed9b54559cadceda27ec"

const SignUp = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = Context();
  const navigate = useNavigate();

  const Handleregister =async (e) => {
    e.preventDefault();
    const emailvalue = e.target.email.value;
    const namevalue = e.target.name.value;
    const passwordvalue = e.target.password.value;
    console.log(e.target.image.files[0]);
    const image =e.target.image.files[0]

    const formData = new FormData();
    formData.append("image", image);
    // console.log(image);
    const { data } = await axios.post(
     ` https://api.imgbb.com/1/upload?key=${api_key}`,
      formData
    );
    console.log(data.data.display_url);

    if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(
        passwordvalue
      )
    ) {
      // console.log("Valid password:", passwordvalue);
    } else {
      toast.error("Password must contain at least one letter and one number, and be at least 8 characters long.");

    }

    createUser(emailvalue, passwordvalue)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      // create user entry in the database
      // const userInfo = {
      //   name: namevalue,
      //   email: emailvalue,
      //   image:data?.data?.display_url,

      // };
      // console.log(userInfo);
      // AxiosPublic.post("/users", userInfo).then((res) => {
      //   if (res.data.insertedId) {
      //     console.log("urser added to the database");

      //     Swal.fire({
      //       position: "top-end",
      //       icon: "success",
      //       title: "User created successfully.",
      //       showConfirmButton: false,
      //       timer: 1500,
      //     });
      //     navigate("/");
      //   }
      // });
      updateUserProfile(namevalue, data?.data?.display_url)

    }
    ).catch((error) =>
    console.log(error)
  )

    // console.log(image);
    // const formData = new FormData()
    // formData.append('image', image)
    // // console.log(image);
    // const res= await axios.post(
    //   `https://api.imgbb.com/1/upload?key=${api_key}`,
    //   formData
    // )
    // console.log(res.data.data.display_url);

    // console.log();
    // if (
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(
    //     passwordvalue
    //   )
    // ) {
    //   console.log("Valid password:", passwordvalue);
    //   createUser(emailvalue, passwordvalue)
    //     .then((result) => {
    //       toast.success(result.user, "You Have SuccessFully Create Account");
    //       updeateProfile(emailvalue, namevalue, res.data.data.display_url)
    //         .then((results) => {
    //           console.log(results);
    //           // toast.success("🦄 Wow so easy!", {
    //           //   position: "top-right",
    //           //   autoClose: 5000,
    //           //   hideProgressBar: false,
    //           //   closeOnClick: true,
    //           //   pauseOnHover: true,
    //           //   draggable: true,
    //           //   progress: undefined,
    //           //   theme: "dark",
    //           // });

    //           console.log(results, "updateProfile successfully  ");
    //           // navigate("/");
    //         })
    //         .catch((error) => {
    //           console.log(error.message);
    //         });
    //     })
    //     .catch((error) => {
    //       toast.error(error.message);
    //     });
    // } else {
    //   toast.error(
    //     "Password must contain at least one letter and one number, and be at least 8 characters long."
    //   );
    // }

    // console.log(emailvalue, passwordvalue,res.data.data.display_url);
  };

  return (
    <>
      {/* <Helmet>
        <title> | Sign Up</title>
      </Helmet> */}
      <div className="flex ">
        <div>
          <p>arman</p>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-400">Welcome to Blood Source</p>
            </div>
            <form
              onSubmit={Handleregister}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Image:
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    id="password"
                    required
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  />
                  <span
                    className="relative text-xl  -top-8 left-60 md:left-72"
                    onClick={() =>
                       setShowPassword(!ShowPassword)}
                  >
                    {ShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-rose-500 w-full rounded-md py-3 text-white"
                >
                  Continue
                </button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Signup with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
              <FcGoogle size={32} />

              <p>Continue with Google</p>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

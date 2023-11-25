import { NavLink } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/resoures/logo.png";
const Navber = () => {
  // const { user, logOut } = Context();
  // console.log(user);
  // const [data] = useCart();
  // console.log(data);
  // function HomeIcon(props) {
  //   return (
  //     <SvgIcon {...props}>
  //       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  //     </SvgIcon>
  //   );
  // }
  // const HandlelogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.log(error));
  // };

  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>
          {/* <Stack direction="row" spacing={3}>
            <HomeIcon color="success" />
          </Stack> */}
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact_us"}>CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to={"dashboard"}>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to={"/our_menu"}>PROPERTIES</NavLink>
      </li>
      <div>
        {/* {user && ( */}
        <ul className="lg:flex gap-5 items-center mx-2">
          <li>
            <NavLink to={"/shop/salad"}>
              <FaShoppingCart></FaShoppingCart>WISHLIST
            </NavLink>
          </li>
          <NavLink to={"/dashboard/cart"} className="">
            <button> Properties</button>
            {/* <li className="badge badge-secondary">+{data?.length}</li> */}
          </NavLink>
        </ul>
        {/* )} */}
      </div>
      {/* {user ? ( */}
      <li className="text-end ">
        <NavLink>SIGN OUT</NavLink>
      </li>
      {/* ) : ( */}
      <li className="text-end ">
        <NavLink to={"/login"}>SIGN IN</NavLink>
      </li>
      {/* )} */}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <div className="flex ">
            <div>
              <img className="h-10 md:h-16 " src={logo} />
            </div>
            <div className="-ml-2 md:-ml-5">
              <a className="normal-case text-xl">Canvas</a>

              <p className="uppercase text-xl font-bold -mt-2 pl-2">
                Properties
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
                    <a className="btn">LOGIN NOW</a>
                </div> */}
      </div>
    </>
  );
};

export default Navber;

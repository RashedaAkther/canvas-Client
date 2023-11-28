import { NavLink } from "react-router-dom";


import logo from "../../assets/resoures/logo.png";
import Context from "../../Hooks/useContext";
const Navber = () => {
  const { user, logOut } = Context();
  console.log(user);

 
  const HandlelogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>
         
          HOME
        </NavLink>
      </li>
     
     
      <li>
        <NavLink to={"/Properties"}>PROPERTIES</NavLink>
      </li>
      <li>
        <NavLink to={"/add-properties"}>ADD-PROPERTIES</NavLink>
      </li>
      <div>
      </div>

    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-yellow-400 text-2xl font-bold">
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
        <div className="navbar-end ml-10 ">
          {user?.email ? (
            <div className="dropdown dropdown-end dropdown-hover text-black ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
         
                <li className=" py-2 ">
                  <NavLink
                    to={"/dashboard"}
                    className={({isPending, isActive }) =>
                    isPending
                    ? "pending "
                    : isPending
                    ? "pending "
                    : isActive
                    ? "btn btn-warning "
                    : "btn btn-outline btn-warning "
                    }
                  >
                    DASHBOARD
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({isPending, isActive }) =>
                    isPending
                    ? "pending "
                    : isPending
                    ? "pending "
                    : isActive
                    ? "btn btn-warning "
                    : "btn btn-ghost "
                    }
                    onClick={logOut}
                  >
                    LOGOUT
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isPending
                  ? "pending "
                  : isActive
                  ? "btn btn-warning "
                  : "btn btn-ghost "
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;

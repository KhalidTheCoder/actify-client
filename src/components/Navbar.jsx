import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/actify.jpg";
import { AuthContext } from "../context/AuthContext";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#493628] sticky top-0 z-50 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="flex justify-center items-center gap-2">
            <img className="w-10 rounded-4xl" src={logoImg} alt="" />
            <h1 className="text-3xl font-bold text-[#E4E0E1]">Actify</h1>
          </div>
        </div>
        <div className="navbar-center hidden md:flex flex gap-3">
          <NavLink to="/" className="relative group transition duration-300">
            <span className="text-[#E4E0E1] group-hover:text-white font-semibold">
              Home
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#AB886D] to-[#E4E0E1] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/upcoming-events"
            className="relative group transition duration-300"
          >
            <span className="text-[#E4E0E1] group-hover:text-white  font-semibold">
              Upcoming Events
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#AB886D] to-[#E4E0E1] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/blogs"
            className="relative group transition duration-300"
          >
            <span className="text-[#E4E0E1] group-hover:text-white  font-semibold">
              Blog & Articles
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#AB886D] to-[#E4E0E1] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </div>

        <div className="navbar-end flex items-center gap-1.5">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="dark" />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={
                        user.photoURL ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="text-lg font-bold">
                    <Link to="/create-event" className="justify-between">
                      Create Event
                    </Link>
                  </li>
                  <li className="text-lg font-bold">
                    <Link to="/manage-events">Manage Events</Link>
                  </li>
                  <li className="text-lg font-bold">
                    <Link to="/joined-events">Joined Events</Link>
                  </li>
                  <li className="text-[#AB886D] font-bold">
                    <Link to="/login" onClick={logOut}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 justify-center items-center">
              <Link to="/login">
                <button className="text-sm text-[#E4E0E1] cursor-pointer font-semibold hover:scale-105 transform hover:text-white transition duration-300">
                  Login
                </button>
              </Link>
              <Link
                to="/register"
                className="px-4 py-1.5 rounded-full bg-[#FCF7F8] text-[#493628] font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-white"
              >
                Register
              </Link>
            </div>
          )}

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <RiMenu4Line className="text-3xl text-[#E4E0E1]" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#493628] px-4 pb-4">
          <NavLink
            to="/"
            className="block py-2 text-[#E4E0E1] font-semibold hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/upcoming-events"
            className="block py-2 text-[#E4E0E1] font-semibold hover:text-white"
          >
            Upcoming Events
          </NavLink>
          <NavLink
            to="/blogs"
            className="block py-2 text-[#E4E0E1] font-semibold hover:text-white"
          >
            Blog & Articles
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

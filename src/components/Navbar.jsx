import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/actify.jpg";
import { AuthContext } from "../context/AuthContext";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#493628] shadow-sm">
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
        </div>

        <div className="navbar-end flex items-center gap-1.5">
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
        </div>
      )}
    </div>
  );
};

export default Navbar;

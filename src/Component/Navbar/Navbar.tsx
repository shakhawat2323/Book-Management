// components/HeroPage.jsx

import "animate.css";
import BooksLogo from "../../assets/Img/bookslogo.png";

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const HeroPage = () => {
  const Navbar = [
    <li>
      <Link to="/">Home</Link>
    </li>,
    <li>
      <Link to="/allbooks">All Books</Link>
    </li>,
    <li>
      <Link to="/addbooks">Add Book</Link>
    </li>,
    <li>
      <Link to="/borrowsummary">Borrow Summary</Link>
    </li>,
  ];
  return (
    <div>
      {/* Navbar */}
      <div className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={BooksLogo} alt="Logo" className="w-10 h-10" />
            <span className="text-2xl font-semibold text-gray-800 tracking-wide">
              Book<span className="text-red-500">Bazar</span>
            </span>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium">
            {/* {["HOME", "ABOUT US", "EVENT", "SHOP", "PAGES"].map(
              (item, index) => (
                <li key={index}>
                  <NavLink
                    to="/"
                    className="nav-btn bg-gray-100 hover:bg-red-100 text-gray-800 px-4 py-2 rounded-md relative"
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )} */}
            {Navbar}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-full pl-4 pr-10 py-2 focus:outline-none text-sm w-56"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                🔍
              </span>
            </div>

            {/* Cart */}

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/bookslist" className="text-xl font-medium">
                    Book List
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
    </div>
  );
};

export default HeroPage;

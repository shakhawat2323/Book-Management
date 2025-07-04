// components/HeroPage.jsx

import "animate.css";
import BooksLogo from "../../assets/Img/bookslogo.png";

import { Link } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
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
    <li>
      <Link
        to="/bookslist"
        className="lg:text-xl lg:font-medium block lg:hidden"
      >
        Book List
      </Link>
    </li>,
  ];
  return (
    <div>
      <div className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img src={BooksLogo} alt="Logo" className="w-10 h-10" />
              <span className="text-2xl font-semibold text-gray-800 tracking-wide">
                Book<span className="text-red-500">Bazar</span>
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium">
            {Navbar}
          </ul>

          <div className="flex items-center gap-4">
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

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hidden lg:block lg:py-5"
              >
                <CiMenuBurger className="text-xl font-medium" />
              </div>
              <div>
                <div className="navbar-start">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost lg:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                      {Navbar}
                    </ul>
                  </div>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    to="/bookslist"
                    className="text-xl font-medium hidden lg:block"
                  >
                    Book List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

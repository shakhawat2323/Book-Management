import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "lucide-react";
import Logos from "../../assets/Img/bookslogo.png";
const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16">
      {/* Newsletter Section */}
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Sign Up for Our Newsletter
        </h2>
        <p className="text-gray-400 mb-6">
          Fermentum tempor cubilia risus tellus massa dis consectetur dolor.
        </p>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-full focus:outline-none border border-gray-300 focus:border-red-500 transition"
          />
          <button className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-red-600 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-gray-700 mx-8" />

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-8 text-sm text-gray-300 pb-12">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-white mb-3">Know More</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Company Story</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-white mb-3">Shop</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Coupon</a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-white mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Meet Our Authors</a>
            </li>
            <li>
              <a href="#">Contact Form</a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="font-bold text-white mb-3">Stay Connected</h4>
          <p className="mb-4">
            Stay connected and get interesting news & coupon
          </p>
          <div className="flex gap-3">
            <FacebookIcon className="w-5 h-5 hover:text-red-500" />
            <TwitterIcon className="w-5 h-5 hover:text-red-500" />
            <YoutubeIcon className="w-5 h-5 hover:text-red-500" />
            <InstagramIcon className="w-5 h-5 hover:text-red-500" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0d0d0d] py-4 px-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <img src={Logos} alt="Bookarazi" className="h-5" />
          <span className="text-2xl font-semibold text-white tracking-wide">
            Book<span className="text-red-500">Bazar</span>
          </span>
        </div>
        <p className="mt-3 md:mt-0">
          Copyright © 2025 BookBazar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

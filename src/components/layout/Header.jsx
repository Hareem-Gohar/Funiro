import React, { useState } from "react";
import cart from "/images/Cart.png";
import wishlist from "/images/Heart.png";
import Search from "/images/Search.png";
import { CiMenuKebab } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="py-5 px-6 flex flex-wrap gap-5 lg:gap-16 items-center justify-normal lg:justify-between">
        <div className="font-bold flex-grow lg:flex-grow-0 text-2xl">
          <a href="#">Furniro</a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-grow gap-10 items-center">
          <ul className="flex gap-10">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Rooms</a>
            </li>
            <li>
              <a href="">Inspiration</a>
            </li>
          </ul>
          <form action="" className="relative w-1/2 px-3 bg-white">
            <input
              type="text"
              className="w-full bg-transparent px-8 py-2 focus:outline-none"
              placeholder="Search for minimalist Chair"
            />
            <img
              className="absolute top-[10px] left-3"
              src={Search}
              alt="Search"
            />
          </form>
        </div>

        <div className="hidden md:flex gap-6">
          <button>
            <img src={wishlist} alt="Wishlist" />
          </button>
          <button>
            <img src={cart} alt="Cart" />
          </button>
        </div>

        {/* Mobile Menu Btn */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="z-50 fixed right-3"
          >
            {isMenuOpen ? (
              <RiCloseFill className="text-[#262F56]" fontSize={25} />
            ) : (
              <CiMenuKebab className="text-[#262F56]" fontSize={25} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-40 top-0 right-0 w-2/3 h-full bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full items-center mt-16 space-y-8">
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

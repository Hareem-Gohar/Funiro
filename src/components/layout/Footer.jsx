import React from "react";
import location from "/images/location.png";
import phone from "/images/Phone.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-5 px-4 border-t border-gray-200 py-10 text-gray-600 justify-between">
        {/* First Column (Wider) */}
        <div className="w-full sm:w-[300px] lg:w-[300px] mb-5">
          <h3 className="text-lg font-semibold mb-4">Funiro.</h3>
          <p className="text-sm mb-2">
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website.
          </p>
          <p className="text-sm my-3 flex items-center">
            <img src={location} alt="Location icon" className="mr-2 w-5 h-5" />
            Sawoajajar Malang, Indonesia
          </p>
          <p className="text-sm mb-3 flex items-center">
            <img src={phone} alt="Phone icon" className="mr-2 w-5 h-5" />
            +6289 456 3455
          </p>
          <p className="text-sm mb-3">www.funiro.com</p>
        </div>

        {/* Middle Columns (Narrower) */}
        <div className="w-full sm:w-[300px] lg:w-[200px] mb-5">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Products</li>
            <li>Rooms</li>
            <li>Inspirations</li>
            <li>About Us</li>
            <li>Terms & Policy</li>
          </ul>
        </div>

        <div className="w-full sm:w-[300px] lg:w-[200px] mb-5">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-gray-600">
            <li>My Account</li>
            <li>Checkout</li>
            <li>My Cart</li>
            <li>My Catalog</li>
          </ul>
        </div>

        <div className="w-full sm:w-[300px] lg:w-[200px] mb-5">
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        {/* Last Column (Wider) */}
        <div className="w-full sm:w-[300px] lg:w-[250px] mb-5">
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none mb-2 sm:mb-0 sm:mr-1"
            />
            <button className="bg-orange-400 p-2 rounded text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

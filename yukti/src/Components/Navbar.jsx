import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://silicon.ac.in/wp-content/themes/sit/assets/img/logo-7.png"
            alt="Logo"
            className="h-12"
          />
        </div>
        <div className="flex space-x-10 text-center text-2xl">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            Gallery
          </a>
          <a href="#" className="hover:text-orange-500">
            Events
          </a>
          <a href="#" className="hover:text-orange-500">
            Team
          </a>
        </div>
        <button className="bg-orange-500 text-white ml-10 px-4 py-2 rounded">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

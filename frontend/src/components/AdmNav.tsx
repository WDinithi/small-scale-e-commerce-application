import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaSignInAlt } from "react-icons/fa";

function AdmNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 mt-3 bg-transparent">
      <div className="container mx-auto flex justify-between items-center text-black">
        <div className="text-black text-2xl font-bold font-custom">
          WallArt Store
        </div>
        <div className="hidden md:flex space-x-6 text-lg font-custom">
          <a
            href="/admin"
            className="flex items-center text-black hover:text-[#2c551d]"
          >
            Dashboard
          </a>
          <a
            href="/item-manage"
            className="flex items-center text-black hover:text-[#2c551d]"
          >
            Manage Item
          </a>
          <a
            href=""
            className="flex items-center text-black hover:text-[#2c551d]"
          >
            Orders
          </a>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-black hover:text-[#2c551d]">
              <FaSignInAlt className="h-6 w-6" />
            </a>
          
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4 text-lg font-custom text-center">
            <a
              href="/home"
              className="flex items-center text-black hover:text-[#2c551d]"
            >
              Dashboard
            </a>
            <a
              href="/about"
              className="flex items-center text-black hover:text-[#2c551d]"
            >
              Item
            </a>
            <a
              href="/shop"
              className="flex items-center text-black hover:text-[#2c551d]"
            >
              Orders
            </a>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-black hover:text-[#2c551d]">
                <FaSignInAlt className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default AdmNav;

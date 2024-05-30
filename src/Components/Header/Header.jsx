import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const productName = "Collers";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-headerbg font-roboto flex items-center justify-between h-24 px-5 md:px-20 relative">
      <div className="header-logo">
        <h1 className="text-headertext font-[600] text-[32px] leading-[32.5px] ">
          {productName}
        </h1>
      </div>
      <div className="header-menu hidden md:flex flex-col items-center">
        <ul className="flex gap-6 text-headertext font-[600] items-center">
          <li>Products</li>
          <li>Solutions</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Log in</li>
          <button className="border-2 rounded-lg px-4 py-2">
            Sign up Now
          </button>
        </ul>
      </div>
      <div className="md:hidden flex items-center z-50">
        <button onClick={toggleMenu} className="text-headertext">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-headerbg flex flex-col items-center justify-center z-40">
          <ul className="flex flex-col gap-6 text-headertext font-[600] items-center">
            <li onClick={toggleMenu}>Products</li>
            <li onClick={toggleMenu}>Solutions</li>
            <li onClick={toggleMenu}>Pricing</li>
            <li onClick={toggleMenu}>Resources</li>
            <li onClick={toggleMenu}>Log in</li>
            <button onClick={toggleMenu} className="border-2 rounded-lg px-4 py-2">
              Sign up Now
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

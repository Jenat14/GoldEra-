import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav
      className="w-full h-16 flex items-center justify-between px-4"
      style={{ backgroundColor: '#C07F00' }}
    >
     <h1  className="text-4xl font-bold text-white">GOLDERA </h1>
      <ul className="flex space-x-8 text-black">
        <li className="hover:text-gray-700 cursor-pointer">Home</li>
        <li className="hover:text-gray-700 cursor-pointer">About Us</li>
        <li className="hover:text-gray-700 cursor-pointer">Login</li>
        <li>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

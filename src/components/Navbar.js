import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  return (
    <div className="h-28 bg-gradient-to-b  from-indigo-300 via-purple-300 to-pink-300">
      <div className="flex justify-between items-center h-full px-5">
        <h1 className="md:text-3xl text-xl font-bold font-serif">
          Maurya Wedding Lawn
        </h1>
        <ul className="hidden md:flex gap-5">
          <li>Home</li>
          <li>login</li>
          <li>Signup</li>
          <li>Admin</li>
          <li>Contact</li>
        </ul>
        <h1 className="md:hidden block text-3xl">
          <GiHamburgerMenu />
        </h1>
      </div>
    </div>
  );
}

export default Navbar;

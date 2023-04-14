import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

function Navbar() {
  return (
    <div className="bg-neutral-100 shadow-md shadow-black w-full h-20 flex items-center justify-between">
      <div className="font-serif text-black font-bold text-2xl pl-5">
        <h1 direction="right">Maurya Wedding Lawn</h1>
      </div>
      <div className="text-gray-500 pr-5 flex gap-10 text-center items-center  font-serif font-bold hover:cursor-pointer">
        <Link
          className="text-3xl hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 .. "
          to="/"
        >
          <HiHome />
        </Link>
        <Link
          className=" hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ... "
          to="/login"
        >
          Login
        </Link>
        <Link
          className=" hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ..."
          to="/signup"
        >
          Signup
        </Link>
        <Link
          className="shadow-sm shadow-black border-2 rounded-lg w-24  transition ease-in-out delay-50 bg-gray-700 hover:-translate-y-1 hover:scale-75 hover:bg-red-500 text-white duration-300 ..."
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

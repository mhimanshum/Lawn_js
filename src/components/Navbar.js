import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { HiOutlineMenu } from 'react-icons/hi';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-neutral-100 shadow-md shadow-black w-full h-20 flex items-center justify-between">
      <div className=" font-serif text-black font-bold text-2xl pl-5">
        <h1 direction="right">Maurya Wedding Lawn</h1>
      </div>
      <div className="text-gray-500 pr-5 flex gap-10 text-center items-center  font-serif font-bold hover:cursor-pointer">
        <Link
          className={`text-3xl hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ... ${
            location.pathname === '/' && 'text-green-600'
          }`}
          to="/"
        >
          <HiHome />
        </Link>
        <Link
          className={`text-lg hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ${
            location.pathname === '/login' && 'text-red-600'
          }`}
          to="/login"
        >
          Login
        </Link>
        <Link
          className={`text-lg hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ${
            location.pathname === '/signup' && 'text-blue-600'
          }`}
          to="/signup"
        >
          Signup
        </Link>
        <Link
          className={`text-lg hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ${
            location.pathname === '/admin' && 'text-lime-600'
          }`}
          to="/admin"
        >
          Admin
        </Link>
        <Link
          className={`text-lg shadow-sm shadow-black border-2 rounded-lg w-24  transition ease-in-out delay-50 bg-gray-700 hover:-translate-y-1 hover:scale-110      
          hover:bg-red-500 text-white duration-300 ${
            location.pathname === '/contact' && 'text-white bg-red-600'
          }`}
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-3xl">
        <HiOutlineMenu />
        <div className={!isOpen ? 'hidden' : 'bg-gray-600 pt-20 w-96'}></div>
      </div>
    </div>
  );
}

export default Navbar;

/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="shadow-lg shadow-black z-50 flex justify-between bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 items-center h-24 w-full mx-auto px-4 sticky top-0">
      <h1 className="w-full font-serif text-xl md:text-3xl font-bold text-black">
        Maurya Wedding Lawn
      </h1>
      <ul className="hidden md:flex text-gray-500 pr-5  gap-10 text-center items-center  font-serif font-bold hover:cursor-pointer">
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
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {isOpen ? (
          <GrClose className="text-3xl text-black" />
        ) : (
          <GiHamburgerMenu className="text-3xl text-black" />
        )}
      </div>
      <ul
        className={
          isOpen
            ? 'fixed z-50 left-0 top-0 w-[60%] h-full text-white border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed text-white left-[-100%]'
        }
      >
        <h1 className="flex justify-center w-full text-3xl font-bold text-white mt-10 ">
          Menu
        </h1>
        <div className="flex flex-col justify-center w-full">
          <Link
            className={`mt-10 flex justify-center text-center text-3xl hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ... ${
              location.pathname === '/' && 'text-green-600'
            }`}
            to="/"
          >
            <HiHome />
          </Link>
          <Link
            className={`mt-10 text-center text-lg hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ${
              location.pathname === '/login' && 'text-red-600'
            }`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className={`mt-10 text-center text-lg hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ${
              location.pathname === '/signup' && 'text-blue-600'
            }`}
            to="/signup"
          >
            Signup
          </Link>
          <Link
            className={`mt-10 text-center text-lg hover:-translate-y-1 hover:scale-90 hover:text-black duration-300 ${
              location.pathname === '/admin' && 'text-lime-600'
            }`}
            to="/admin"
          >
            Admin
          </Link>

          <div className="mt-10 flex justify-center">
            <Link
              className={`text-center text-lg shadow-sm shadow-black border-2 rounded-lg w-24  transition ease-in-out delay-50 bg-gray-700 hover:-translate-y-1 hover:scale-110      
            hover:bg-red-500 text-white duration-300 ${
              location.pathname === '/contact' && 'text-white bg-red-600'
            }`}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default Navbar;

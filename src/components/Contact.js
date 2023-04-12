import React from 'react';
import { HiMailOpen, HiOutlinePhoneOutgoing } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <div className="flex justify-center  ">
        <div className="mt-16 border-2 border-black rounded-2xl shadow-xl shadow-black bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-96 h-96">
          <div className="flex ml-5">
            <h1 className="text-3xl mt-10">
              <HiMailOpen />
            </h1>
            <text className=" mt-10 font-extrabold font-serif">
              --mauryahimanshu1999@gmail.com
            </text>
          </div>
          <div className="flex ml-5">
            <a
              href="https://wa.me/917499986369"
              target="_blank"
              rel="noreferrer"
              className="text-3xl mt-5"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/917499986369"
              className=" mt-5 font-extrabold font-serif"
            >
              --Chat On Whatsapp
            </a>
          </div>
          <div className="flex ml-5">
            <h className="text-3xl mt-5">
              <HiOutlinePhoneOutgoing />
            </h>
            <h1 className=" mt-5 font-extrabold font-serif">--+917499986369</h1>
          </div>
          <div className="flex ml-5">
            <h1 className="text-3xl mt-5">
              <FaLocationArrow />
            </h1>
            <h1 className=" mt-5 font-extrabold font-serif">
              --Near Sabji Mandi Khalwapur,SRN Bhadohi Uttar Pradesh 221306
              INDIA
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

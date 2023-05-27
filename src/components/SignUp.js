import React, { useState } from 'react';
import { client } from '../api';

function SignUp() {
  const [details, setDetails] = useState({});
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('apple');
      const res = await client.post('/users/signup', details);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" relative flex justify-center">
      <div className="absolute shadow-lg shadow-black flex bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-96 border-2 rounded-2xl mt-14 border-black justify-center">
        <form>
          <div className="flex justify-center mt-10 gap-3  ml-10 mr-10 ">
            <input
              placeholder="Please Enter Your Name"
              required
              type="text"
              className="shadow-lg shadow-black border-2 text-center font-serif text-auto border-black w-60 h-10 rounded-lg"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            ></input>
            <input
              placeholder="Please Enter Your Email"
              required
              type="email"
              className="shadow-lg shadow-black border-2 text-center font-serif text-auto border-black w-60 h-10 rounded-lg"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            ></input>
          </div>
          <div className="flex justify-center mt-10 gap-3">
            <input
              placeholder="Please Enter Your Contact No"
              required
              type="number"
              className="shadow-lg shadow-black border-2 text-center font-serif text-auto border-black w-60 h-10 rounded-lg
             [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
            ></input>
            <input
              placeholder="Please Enter Your Alternate No"
              required
              type="number"
              className="shadow-lg shadow-black border-2 text-center font-serif text-auto border-black w-60 h-10 rounded-lg 
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  alt_phone: e.target.value,
                }))
              }
            ></input>
          </div>
          <div className="flex justify-center mt-10">
            <input
              placeholder="Enter Your Secret Password"
              required
              type="password"
              className="shadow-lg shadow-black border-2 border-black text-center font-serif text-auto w-60 h-10 rounded-lg"
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            ></input>
          </div>
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              onClick={onSubmit}
              className="shadow-lg shadow-black font-serif bg-black w-28 font-extrabold hover:bg-yellow-700 text-white text-2xl
             rounded-lg text-center"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

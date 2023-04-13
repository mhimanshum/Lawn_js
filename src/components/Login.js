import React, { useState } from 'react';
import Images from './images.jpg';
import { client } from '../api';

function Login() {
  const [details, setDetails] = useState({});
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('apple');
      const res = await client.post('/users/login', details);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
        <div className="flex justify-center">
          <div className="relative shadow-lg shadow-black rounded-2xl w-96 h-96 mt-16 border-2 border-black  flex justify-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <img
              src={Images}
              alt="Logo"
              className=" absolute rounded-full w-28 h-28 mt-5"
            ></img>
            <input
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              placeholder="Enter Your Email"
              required
              type="email"
              className="absolute font-serif rounded-3xl border-2 border-black text-center w-60 h-10 mt-40 "
            ></input>
            <input
              onChange={(e) =>
                setDetails((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              placeholder="Enter Your Password"
              required
              type="password"
              className="absolute font-serif rounded-3xl border-2 border-black text-center w-60 h-10 mt-52"
            ></input>
            <button
              onClick={onSubmit}
              type="submit"
              className="w-36 h-10 rounded-3xl font-serif font-bold text-white hover:bg-yellow-700 bg-blue-900 mt-64"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;

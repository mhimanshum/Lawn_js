import React, { useState } from 'react';
import admin from './admin.png';
import { client } from '../../api';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [details, setDetails] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage(undefined);
    setError(undefined);
    try {
      console.log('apple');
      const res = await client.post('/emploies/login', details);
      setMessage(res.data.message);
      navigate('/adminDashboard');
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <>
      <form>
        <div className="flex justify-center bg-gradient-to-t from-sky-400 to-cyan-300 min-h-screen">
          <div className="relative shadow-lg shadow-black rounded-2xl w-96 h-96 mt-16 border-2 border-black  flex justify-center bg-gradient-to-r from-red-600 via-red-700 to-red-900">
            <img
              src={admin}
              alt="Logo"
              className=" absolute rounded-full w-28 h-28 mt-7"
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
              className="w-36 h-10 rounded-3xl font-serif font-bold text-white hover:bg-yellow-700 bg-black mt-64"
            >
              Admin Login
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <div className="absolute flex justify-center mt-3 border w-60 border-black">
              {message && (
                <h1 className="text-lg font-serif font-semibold">{message}</h1>
              )}
              {error && (
                <h1 className="text-lg font-serif font-bold">{error}</h1>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Admin;

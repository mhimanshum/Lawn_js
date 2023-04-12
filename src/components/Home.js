import React from 'react';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';

function Home() {
  return (
    <>
      <div>
        <div className=" flex gap-7 justify-between ml-20 mr-20 mt-20">
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-80">
            <img src={p1} alt="p1" className="min-h-full"></img>
          </div>
          <div className="  bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-96 h-80">
            <img src={p2} alt="p2" className="min-h-full"></img>
          </div>
          <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black  w-96 h-80">
            <img src={p3} alt="p3" className="min-h-full"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

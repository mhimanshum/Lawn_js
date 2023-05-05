import React, { useEffect, useState } from 'react';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import axios from 'axios';

function Home() {
  const [corouselPhotos, setCorouselPhotos] = useState([]);
  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        'https://api.pexels.com/v1/search?query=wedding',
        {
          headers: {
            Authorization:
              'JQ1UYhazr7VpDbCEo0kfzm6I7TwULg97HtJe1LCmBNvbBocJWfuVIFPS',
          },
        },
      );
      setCorouselPhotos(data.photos[0]);
      let i = 1;
      setInterval(() => {
        if (i > data.photos.length) {
          i = 0;
        }
        setCorouselPhotos(data.photos[i]);
        i++;
      }, 10000);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-center items-center mt-24">
          <img
            src={corouselPhotos?.src?.landscape}
            alt={corouselPhotos?.alt}
            className="shadow-2xl shadow-black rounded-xl object-cover"
          />
        </div>
        <div className=" flex gap-7 justify-between ml-20 mr-20 mt-40 pb-10">
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

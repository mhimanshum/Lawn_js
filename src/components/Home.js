import React, { useEffect, useState } from 'react';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import axios from 'axios';

function Home() {
  const [photos, setPhotos] = useState([]);
  const handleSearch = async (search) => {
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
      console.log(data);
      setPhotos(data);
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
        <div>
          {photos?.photos?.map((photo) => {
            return <img src={photo?.src?.landscape} alt={photo?.alt} />;
          })}
        </div>
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

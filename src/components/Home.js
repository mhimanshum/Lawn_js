import React, { useEffect, useState } from 'react';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import axios from 'axios';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
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
        setIsLoading(false),
        setError(''),
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
      setError(err.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <>
      <div className="px-0">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-full min-w-full">
            <div class="flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-24 h-24 text-red-600 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
          </div>
        ) : (
          <>
            {error.length ? (
              <div>{error}</div>
            ) : (
              <>
                <div>
                  <div className="flex justify-center items-center py-10 px-10">
                    <img
                      src={corouselPhotos?.src?.landscape}
                      alt={corouselPhotos?.alt}
                      className="shadow-2xl shadow-black rounded-xl w-full object-cover"
                    />
                  </div>
                  <div className=" md:flex gap-7 md:justify-center ml-20 mr-20 pb-10">
                    <div className=" bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-60 h-60 md:w-96 md:h-80">
                      <img src={p1} alt="p1" className="min-h-full"></img>
                    </div>
                    <div className="mt-10  bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black w-60 h-60 md:w-96 md:h-80">
                      <img src={p2} alt="p2" className="min-h-full"></img>
                    </div>
                    <div className="mt-10 bg-white shadow-lg hover:-translate-y-1 hover:scale-110  duration-300 ... shadow-black  w-60 h-60 md:w-96 md:h-80">
                      <img src={p3} alt="p3" className="min-h-full"></img>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      )
    </>
  );
}

export default Home;

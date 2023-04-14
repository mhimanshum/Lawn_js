import React from 'react';

function PhotoCard({ image, alt, name }) {
  return (
    <div className="w-52 bg-black rounded-sm">
      <div className="p-1">
        <img
          src={image}
          alt={alt}
          className="w-full object-contain hover:animate-pulse hover:cursor-pointer"
        />
        <h3 className="text-sm font-semibold text-white py-1 cursor-pointer hover:text-yellow-400">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default PhotoCard;

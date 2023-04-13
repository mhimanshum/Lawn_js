import React from 'react';

function PhotoCard({ image,alt }) {
  return (
    <div className="w-52 bg-black rounded-sm">
      <div className="p-1">
        <img
          src={image}
          alt={alt}
          className="w-full object-contain hover:animate-pulse hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

export default PhotoCard;

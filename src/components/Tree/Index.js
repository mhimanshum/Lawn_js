import React from 'react';
import Branch from './Branch/Index';

function Tree({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <Branch key={index} item={item} level={0} />
      ))}
    </div>
  );
}

export default Tree;

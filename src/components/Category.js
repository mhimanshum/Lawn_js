import React, { useState } from 'react';
import { HiArrowSmDown } from 'react-icons/hi';

function Category({ categories }) {
  const [showTree, setShowTree] = useState(false);

  const handleTree = (category) => {
    categories.map((c) => {
      console.log(category);
      console.log(c.cid === category.id);
      if (c.cid === category.id) {
        return <div className="border-4 border-black w-32">{c.name}</div>;
      }
    });
  };
  return (
    <>
      <div className="flex py-10 justify-center gap-5">
        {categories.map((category) => {
          console.log(category);
          if (!category.cid) {
            return (
              <div className="border-4 border-black w-32">
                {category.name}
                <HiArrowSmDown
                  className="text-3xl"
                  onClick={() => {
                    setShowTree(true);
                  }}
                />
                {showTree && handleTree(category)}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Category;

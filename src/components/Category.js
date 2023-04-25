import React from 'react';
import { HiArrowSmDown } from 'react-icons/hi';

function Category({ categories }) {
  return (
    <div className="flex justify-center mt-16 gap-5">
      {categories.map((Category) => {
        if (!Category.cid) {
          return (
            <div className=" w-32">
              {Category.name}
              <HiArrowSmDown
                className=""
                onClick={() => {
                  categories.map((category) => {
                    if (category.cid === Category.id) {
                      console.log(category.name);
                      return (
                        <div className="border-4 border-black w-32">
                          {category.name}
                        </div>
                      );
                    }
                  });
                }}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Category;

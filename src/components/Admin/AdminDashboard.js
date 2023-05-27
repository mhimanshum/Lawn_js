import React, { useEffect, useState } from 'react';
import { client } from '../../api';
import Tree from '../Tree/Index';

function AdminDashboard() {
  const [categories, setCategories] = useState([]);
  const handleDashboard = async () => {
    try {
      const categoryRes = await client.get('/categories');
      const assetRes = await client.get('/assets');
      // setCategories(res.data.categories);
      // console.log(res);
      const data = [];
      const finalCate = [];
      console.log(categoryRes.data.categories);
      categoryRes.data.categories.map((element) => {
        if (!element.cid) {
          return data.push(element);
        }
      });
      data.forEach((el) => {
        el.children = [];
        categoryRes.data.categories.forEach((item) => {
          if (el.id === item.cid) {
            el.children.push(item);
          }
          console.log(el);
        });
        if (el.children.length === 0 && !el.children.isAssets) {
          assetRes.data.assets.map((elem) => {
            if (el.id === elem.cid) {
              el.children.push(elem);
            }
          });
          el.children.isAssets = true;
        }
        el.children.forEach((subItem) => {
          if (!subItem.children) {
            subItem.children = [];
          }
          categoryRes.data.categories.map((elem) => {
            if (subItem.id === elem.cid) {
              subItem.children.push(elem);
            }
          });
          if (subItem.children.length === 0) {
            assetRes.data.assets.map((elem) => {
              if (subItem.id === elem.cid) {
                subItem.children.push(elem);
              }
            });
          }
        });

        finalCate.push(el);
      });
      setCategories(finalCate);
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDashboard();
  }, []);
  return (
    <>
      <div className="mt-20  border border-black bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <Tree categories={categories} />
      </div>
    </>
  );
}

export default AdminDashboard;

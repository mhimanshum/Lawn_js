import React, { useEffect, useState } from 'react';
import { client } from '../../api';
import Tree from '../Tree/Index';

function AdminDashboard() {
  const [categories, setCategories] = useState([]);
  const handleDashboard = async () => {
    try {
      const res = await client.get('/categories');
      // setCategories(res.data.categories);
      // console.log(res);
      const data = [];
      const finalCate = [];
      console.log(res.data.categories);
      res.data.categories.map((element) => {
        if (!element.cid) {
          return data.push(element);
        }
      });
      data.forEach((el) => {
        el.children = [];
        res.data.categories.forEach((item) => {
          if (el.id === item.cid) {
            el.children.push(item);
          }
          console.log(el);
        });
        el.children.forEach((subItem) => {
          if (!subItem.children) {
            subItem.children = [];
          }
          res.data.categories.map((elem) => {
            if (subItem.id === elem.cid) {
              subItem.children.push(elem);
            }
          });
        });

        finalCate.push(el);
      });
      setCategories(finalCate);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDashboard();
  }, []);
  return (
    <>
      <Tree categories={categories} />
    </>
  );
}

export default AdminDashboard;

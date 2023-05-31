import React, { useEffect, useState } from 'react';
import { client } from '../../api';
import Tree from '../Tree/Index';

function assetsChildAdder(assets, c) {
  return assets.filter((cat0) => c.id === cat0.cid).map((a1) => { return { aid: a1.id, catId: a1.cid, name: a1.name, price: a1.price, description: a1.description } })
}

function AdminDashboard() {
  const [categories, setCategories] = useState([]);
  const handleDashboard = async () => {
    try {
      const categoryRes = await client.get('/categories');
      const assetRes = await client.get('/assets');

      const list = categoryRes.data.categories.filter((c) => c.cid === null)

      list.forEach(c1 => {
        c1.children = categoryRes.data.categories.filter((cat1) => c1.id === cat1.cid)
        if (c1.children.length === 0) {
          c1.children = assetsChildAdder(assetRes.data.assets, c1)
        }

        c1.children.forEach(c2 => {
          c2.children = categoryRes.data.categories.filter((cat2) => c2.id === cat2.cid)
          if (c2.children.length === 0) {
            c2.children = assetsChildAdder(assetRes.data.assets, c2)
          }
          c2.children.forEach(c3 => {
            c3.children = assetsChildAdder(assetRes.data.assets, c3)
          });
        });
      });

      setCategories(list)
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

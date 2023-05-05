import React, { useEffect, useState } from 'react';
import { client } from '../../api';
import Category from '../Category';
import Tree from '../Tree/Index';

function AdminDashboard() {
  const [categories, setCategories] = useState([]);
  const dummyData = [
    {
      label: 'Food',
    },
    {
      label: 'Ro',
      children: [
        {
          label: 'Veg',
          children: [
            {
              label: 'ROti',
            },
          ],
        },
      ],
    },
  ];
  const handleDashboard = async () => {
    try {
      const res = await client.get('/categories');
      setCategories(res.data.categories);
      console.log(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDashboard();
  }, []);
  return (
    <>
      <div>{categories.length > 0 && <Category categories={categories} />}</div>
      <Tree data={dummyData} />
    </>
  );
}

export default AdminDashboard;

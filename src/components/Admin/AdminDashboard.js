import React, { useEffect, useState } from 'react';
import { client } from '../../api';
import Category from '../Category';

function AdminDashboard() {
  const [categories, setCategories] = useState([]);

  const handleDashboard = async () => {
    try {
      const res = await client.get('/categories');
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDashboard();
  }, []);
  return (
    <div>{categories.length > 0 && <Category categories={categories} />}</div>
  );
}

export default AdminDashboard;

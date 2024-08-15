import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category._id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
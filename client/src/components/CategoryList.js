import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../api/categoriesApi';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCategory(id);
    loadCategories();
  };

  return (
    <ul>
      {categories.map(category => (
        <li key={category._id}>
          {category.name}
          <button onClick={() => handleDelete(category._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
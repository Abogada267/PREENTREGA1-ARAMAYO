import React from 'react';

const CategoryList = () => {
  const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4'];

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <a key={index} href={`/categoria/${category}`} className="category-link">
          {category}
        </a>
      ))}
    </div>
  );
};

export default CategoryList;

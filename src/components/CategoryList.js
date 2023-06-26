import React from 'react';

const CategoryList = () => {
    const categories = [
    { value: 'category1', label: 'Categoría 1' },
    { value: 'category2', label: 'Categoría 2' },
    { value: 'category3', label: 'Categoría 3' },
    {
      value: 'demandas',
      label: 'Demandas',
      options: [
        { value: 'familia', label: 'Familia' },
        { value: 'laboral', label: 'Laboral' },
        { value: 'daños', label: 'Daños' }
      ]
    }
  ];
  return (
    <div className="category-list"style={{ backgroundColor: 'black', paddingTop: '1rem', width: '100%', position: 'fixed', top: 0, left: 0 }}>
      {categories.map((category, index) => (
          <a key={index}
              href={`/categoria/${category}`} className="category-link"
    style={{ color: 'blue',
            fontFamily: 'Arial',
            paddingRight: '1cm',
            display: 'inline-block',
            marginTop: '2rem' }}
         >
              {category}
          </a>
      ))}
    </div>
  );
};

export default CategoryList;

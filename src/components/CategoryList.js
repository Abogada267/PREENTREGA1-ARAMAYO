import React from 'react';

const CategoryList = () => {
  const categories = ['Demanda de alimentos', 'Carta Documento', 'Multas de tránsito', 'Telegrama Laboral'];

  return (
    <div className="category-list">
      {categories.map((category, index) => (
          <a key={index}
              href={`/categoria/${category}`} className="category-link"
    style={{ color:'blue', fontFamily: 'Arial',paddingRight: '1cm', display: 'interline-block' }}
         >
              {category}
          </a>
      ))}
    </div>
  );
};

export default CategoryList;

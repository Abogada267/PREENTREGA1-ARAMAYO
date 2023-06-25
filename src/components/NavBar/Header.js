import React from 'react';


function Header() {
  return (
    <header className="header">
      <div className="header__logo">
    <img src="./src/assets/logo.png';" alt="Logo" />
              
      </div>
      <div className="header__search">
        <input type="text" placeholder="Buscar productos..." />
        <button type="button">Buscar</button>
      </div>
      <div className="header__nav">
        <a href="/productos">Productos</a>
        <a href="/ofertas">Ofertas</a>
        <a href="/ayuda">Ayuda</a>
        {/* Otros enlaces */}
      </div>
      <div className="header__cart">
        <span className="header__cartCount">0</span>
        <img src="/ruta/al/icono-carrito.png" alt="Carrito" />
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import Brand from './Brand';
import CategoryList from './CategoryList';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/294533423_495591699151773_4023451155261982475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jRp1JNhNXosAX_k1qog&_nc_ht=scontent.faep14-2.fna&oh=00_AfCVRXRIDyQ7RAFM3cYpRTS8leQr64eBT6UvdfDpkyElzg&oe=649D88AE" alt="Logo"style={{ width: '100px', height: 'auto', margin: '10px', border: '1px solid black' }}  />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Buscar productos..." />
        <button type="button">Buscar</button>
      </div>
      <div className="header__nav">
        <CategoryList />
        <a href="/ofertas">Ofertas</a>
        <a href="/ayuda">Ayuda</a>
        {/* Otros enlaces */}
      </div>
      <div className="header__cart">
        <span className="header__cartCount">0</span>
        <img src="/ruta/al/icono-carrito.png" alt="Carrito" />
      </div>
      <Brand />
    </header>
  );
};

export default Header;

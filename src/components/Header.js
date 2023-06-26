import React from 'react';
import Brand from './Brand';
import CategoryList from './CategoryList';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t39.30808-6/294533423_495591699151773_4023451155261982475_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jRp1JNhNXosAX_k1qog&_nc_ht=scontent.faep14-2.fna&oh=00_AfCVRXRIDyQ7RAFM3cYpRTS8leQr64eBT6UvdfDpkyElzg&oe=649D88AE" alt="Logo"style={{ width: '90px', height: 'auto', margin: '80px'  }}  />
      </div>
      <div className="header__cart" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', marginTop: '60px', height: '50%', paddingTop: '5px' }}>
  <img src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png" alt="Carrito" style={{ width: '50px', height: 'auto' }} />
</div>

      <div className="header__search">
        <input type="text" placeholder="escribe el servicio ..."style={{ backgroundColor: 'lightgray' }} />
        <button type="button">Buscar</button>
      </div>
      <div className="header__nav"style={{ color:'blue', fontFamily: 'Arial', paddingRight: '2cm', display: 'interline-block' }}>
        <CategoryList />
         <a href="/ofertas" style={{ marginTop: '2cm' }}        >Ofertas</a>
        <a href="/ayuda">Ayuda</a>
        {/* Otros enlaces */}
      </div>
      <div className="header__cart">
        <span className="header__cartCount"></span>
          </div>
      <Brand />
    </header>
  );
};

export default Header;

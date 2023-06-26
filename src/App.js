import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MainContent from './components/MainContent/MainContent';
import NavBar from './components/NavBar/NavBar'; // Agrega esta línea de importación

const App = () => {
  return (
    <div className="App">
      <Header style={{ color: 'blue',
            fontFamily: 'Arial',
            paddingRight: '1cm',
            display: 'inline-block',
            marginTop: '2rem' }}/>
      <NavBar style={{ color: 'yellow',
            fontFamily: 'Arial',
            paddingRight: '9cm',
            display: 'inline-block',
            marginTop: '2rem' }}/>
      <MainContent style={{ color: 'blue',
            fontFamily: 'Arial',
            paddingRight: '1cm',
            display: 'inline-block',
            marginTop: '2rem' }}/>
    </div>
  );
}

export default App;






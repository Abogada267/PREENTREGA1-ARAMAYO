import React from 'react';
import './App.css';
import Header from './components/Header.js';
import MainContent from './components/MainContent/MainContent';
import NavBar from './components/NavBar/NavBar'; // Agrega esta línea de importación

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;






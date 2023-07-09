import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './components/Button/Button';
import Header from './components/Header';
import NavBar from './components/NavBar/NavBar.jsx';
ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Button/>
    <NavBar />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);



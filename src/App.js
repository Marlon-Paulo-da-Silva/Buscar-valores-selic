import React from 'react';
import logo from './logo.svg';
import './App.css';
import BuscaSelic from './components/BuscaSelic';

function App() {

  
  return (
    <div className="App">
      <div className="linha">  
      <h1>Buscar Valor da Selic</h1>
      <BuscaSelic />
      </div>
    </div>
  );
}

export default App;

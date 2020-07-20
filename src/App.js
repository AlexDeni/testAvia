import React from 'react';
import './App.scss';
import logo from './static/Logo.png'
import { Tickets } from './components/Tickets'

function App() {
  return (
    <div className="App">
        <header className='container layout layoutCenter'>
          <img src={logo} alt="logo" className="logo"/>
        </header>
        <Tickets  />
    </div>
  );
}

export default App;

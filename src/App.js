import React from 'react';
import './App.scss';
import {Layout} from "./ui/Layout";
import logo from "./static/Logo.png"

function App() {
  return (
    <div className="App">
      <Layout>
          <img src={logo} alt="logo" className="logo"/>
      </Layout>
    </div>
  );
}

export default App;

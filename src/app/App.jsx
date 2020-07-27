import React from 'react';

import Header from "./header/component";
import MainBlock from "./main-block/component";
import Footer from "./footer/component";

import './App.css';

const App = () => {
  return (
      <div className="App">
          <Header />
          <MainBlock />
          <Footer />
      </div>
  )
}

export default App;

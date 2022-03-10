import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import CountryCard from "./components/CountryCard/CountryCard";

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <main className="main">
          <CountryCard />
      </main>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import CountryDetails from './containers/CountryDetails/CountryDetails';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/country/:countryCode"
            element={<CountryDetails />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;

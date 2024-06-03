import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/reviews" element={<Reviews/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

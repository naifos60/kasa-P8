import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Propos from './pages/APropos';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Routes> 
       <Route path='/' element={<Home />} />
       <Route path='/propos' element={<Propos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



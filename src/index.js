import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/styles/css/index.css';
import Home from './pages/Home/home.jsx';
import Propos from './pages/APropos/aPropos.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Error from './components/Error/error.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
    <Routes> 
       <Route path='/' element={<Home />} />
       <Route path='/propos' element={<Propos />} />
       <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);



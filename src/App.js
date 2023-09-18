import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Propos from './pages/APropos/aPropos.jsx';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Error from './pages/Error/error.jsx';
import Fiches from './pages/Fiches/fiches.jsx';

function App(){
    return(
    <Router>
      <Header />
        <Routes > 
          <Route path='/' element={<Home />} />
          <Route path='/propos' element={<Propos />} />         
          <Route path='/fiches/:id' element={<Fiches />} />
          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </Router>
    )
}

export default App
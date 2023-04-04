import React, { FC } from 'react';
import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

const App: FC = () => {
  return (
    <BrowserRouter>
    <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
};

export default App;

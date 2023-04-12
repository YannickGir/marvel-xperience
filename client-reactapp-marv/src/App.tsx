import React, { FC } from 'react';
import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Home2 from './pages/Home2';

const App: FC = () => {
  return (
    <BrowserRouter>
        <Header /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
            </Routes>
        <Footer/>
    </BrowserRouter>

  );
};

export default App;

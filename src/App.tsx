import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Footer from './layout/Footer';
import Header from './layout/Header';
import RouterApp from './routes';
import './stylesheets/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

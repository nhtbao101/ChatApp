import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Banner from './components/Banner';
import Footer from './layout/Footer';
import RouterApp from './routes';
import './stylesheets/style.scss';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state: any) => {
    console.log('user redux', state, state.auth);
    return state.auth?.user;
  });
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <RouterApp />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

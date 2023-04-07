import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'src/pages/About';
import HomePage from 'src/pages/HomePage';

// const HomePage = lazy(() => import('src/pages/HomePage'));
// const AboutPage = lazy(() => import('src/pages/About'));

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
  );
};

export default RouterApp;

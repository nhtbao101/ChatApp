import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'src/components/Loading';
// import AboutPage from 'src/pages/About';
// import HomePage from 'src/pages/HomePage';

const HomePage = lazy(() => import('src/pages/HomePage'));
const AboutPage = lazy(() => import('src/pages/About'));

const RouterApp = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default RouterApp;

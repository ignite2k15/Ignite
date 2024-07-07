import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Hero from '../pages/Hero';
import Activities from '../pages/Activities';
import Contact from '../pages/Contact';
import News from '../pages/News';
import Teams from '../pages/Teams';

const MyRoutes = () => {
  return (
    <Routes>
      <Header />
      <Switch>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/News" element={<News />} />
      </Switch>
    </Routes>
  );
};

export default MyRoutes;

import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
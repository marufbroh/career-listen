import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
export const FeaturedJObsContext = createContext([])
export const StoredCartContext = createContext([])
import { ScrollRestoration } from "react-router-dom";

const App = () => {
  const { savedCart, featuredJobs } = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  return (
    <FeaturedJObsContext.Provider value={featuredJobs}>
      <StoredCartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className='min-h-[calc(100vh-579px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
      </StoredCartContext.Provider>
    </FeaturedJObsContext.Provider>
  );
};

export default App;
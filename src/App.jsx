import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
export const FeaturedJObsContext = createContext([])
export const StoredCartContext = createContext([])

const App = () => {
  const { savedCart, featuredJobs } = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  // console.log(cart);
  return (
    <FeaturedJObsContext.Provider value={featuredJobs}>
      <StoredCartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <Outlet></Outlet>
      </StoredCartContext.Provider>
    </FeaturedJObsContext.Provider>
  );
};

export default App;
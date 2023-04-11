import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
export const FeaturedJObsContext = createContext([])
export const StoredCartContext = createContext([])

const App = () => {
  const { storedCart, featuredJobs } = useLoaderData()
  return (
    <FeaturedJObsContext.Provider value={featuredJobs}>
      <StoredCartContext.Provider value={storedCart}>
        <Header></Header>
        <Outlet></Outlet>
      </StoredCartContext.Provider>
    </FeaturedJObsContext.Provider>
  );
};

export default App;
import React, { useEffect } from 'react';

import Hero from '../../components/Hero';
import JoinCommunity from '../../components/JoinCommunity';
import Shop from '../shop/Shop';

const Home = () => {


  return (
    <>
      <Hero />
      <Shop/>
      <JoinCommunity />
    </>
  );
};

export default Home;
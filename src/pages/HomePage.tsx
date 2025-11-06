import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Products } from '../components/Products';
import { References } from '../components/References';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <References />
      <Contact />
    </>
  );
};
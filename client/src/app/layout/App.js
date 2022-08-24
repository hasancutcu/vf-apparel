import { useEffect, useState } from 'react'
import Agent from '../api/agent'
import Header from '../features/header/Header';
import Hero from '../features/hero/Hero';
import ProductGallery from '../features/product/ProductGallery';


function App() {
  return (
    <div >
      <Header />
      <Hero />
      <ProductGallery />
    </div>
  );
}

export default App;

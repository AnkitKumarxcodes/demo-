import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import ProductShowcase from '../components/home/ProductShowcase';
import Testimonials from '../components/home/Testimonials';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <ProductShowcase />
      <Testimonials />
    </div>
  );
}

export default Home;

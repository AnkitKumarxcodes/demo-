import React from 'react';
import { ShoppingCart, Truck, Award } from 'lucide-react';

function FeatureSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <ShoppingCart className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p>Choose from a wide variety of products, with new arrivals every week.</p>
          </div>
          <div className="text-center">
            <Truck className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p>Quick and reliable shipping to your door, anywhere in the world.</p>
          </div>
          <div className="text-center">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p>Top quality products from the best brands and manufacturers worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;

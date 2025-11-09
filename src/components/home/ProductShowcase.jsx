import React from 'react';
import Card from '../common/Card';
import dummyData from '../../data/dummyData';

function ProductShowcase() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dummyData.products.map((product) => (
            <Card key={product.id} hover={true} className="p-4">
              <img className="mb-4 w-full h-48 object-cover rounded-lg" src={product.image} alt={product.name} />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Add to Cart</button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;

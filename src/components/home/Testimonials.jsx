import React from 'react';

function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Customers Love Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="mb-4">"The best online shopping experience I've ever had! Fast delivery and excellent customer service."</p>
            <h3 className="text-lg font-semibold">- Sarah M.</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="mb-4">"High-quality products at unbeatable prices. I highly recommend ShopEase."</p>
            <h3 className="text-lg font-semibold">- John D.</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="mb-4">"A delightful shopping experience with a wide variety of products to choose from."</p>
            <h3 className="text-lg font-semibold">- Emma R.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

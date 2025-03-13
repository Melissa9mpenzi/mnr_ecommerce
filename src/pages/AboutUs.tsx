import React from "react";

export function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About M&R Glam
        </h1>
        <p className="text-xl text-gray-600">
          Your Premier Destination for Luxury Fashion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 mb-4">
            Founded in 2024, M&R Glam emerged from a passion for bringing
            high-end fashion to everyone. We believe that luxury should be
            accessible, and style should be effortless.
          </p>
          <p className="text-gray-600">
            Our journey began with a simple idea: to create a shopping
            experience that combines the elegance of luxury brands with the
            convenience of modern e-commerce.
          </p>
        </div>
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800"
            alt="Our Store"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 bg-[#ff6d38] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To provide our customers with the finest fashion products while
            delivering an exceptional shopping experience.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 bg-[#ff6d38] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">👀</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become the leading destination for luxury fashion, known for our
            quality, style, and customer service.
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 bg-[#ff6d38] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">💎</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Our Values
          </h3>
          <p className="text-gray-600">
            Quality, authenticity, and customer satisfaction are at the heart of
            everything we do.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🛍️</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Curated Collection
            </h3>
            <p className="text-gray-600">
              Carefully selected products from top brands
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping worldwide
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💳</div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              Safe and encrypted payment processing
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Always here to help you</p>
          </div>
        </div>
      </div>
    </div>
  );
}

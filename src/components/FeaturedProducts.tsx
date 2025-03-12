import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from './ProductCard';
import { featuredProducts } from '../data/products';
import 'swiper/css';
import 'swiper/css/navigation';

export function FeaturedProducts() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-peach-900 mb-6">Featured Products</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {featuredProducts.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
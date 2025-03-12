import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { categories } from '../data/products';
import 'swiper/css';
import 'swiper/css/navigation';

export function CategorySection() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-peach-900 mb-6">Shop by Category</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-sm opacity-80">{category.count} items</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
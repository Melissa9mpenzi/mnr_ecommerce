import React from "react";
import { HeroSection } from "../components/HeroSection";
import { CategorySection } from "../components/CategorySection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { NewsletterSection } from "../components/NewsletterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <NewsletterSection />
    </div>
  );
}

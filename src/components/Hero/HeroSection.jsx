"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import TrustedBy from "./TrustedBy";
import HeroStats from "./HeroStats";
import Decoration from "./Decoration";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
      <Decoration />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
        <TrustedBy />
        <HeroStats />
      </div>
    </section>
  );
};

export default HeroSection;

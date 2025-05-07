"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative z-10 hidden md:block">
      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        <Image
          //   src="/assets/images/her-image.jpg"
          src="/assets/images/hero-image.jpg"
          alt="Online Quran Teaching"
          width={800}
          height={600}
          className="w-full h-[550px] object-cover "
          priority
        />
        <div className="absolute inset-0 bg-emerald-900/20 flex items-center justify-center">
          <div className="text-white text-opacity-80 text-6xl md:text-8xl font-arabic rotate-6">
            ٱقْرَأْ
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white   py-6 pl-7 rounded-lg shadow-lg max-w-[200px]">
          <div className="flex items-start gap-3">
            <div className="bg-emerald-100 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-emerald-800">Certified Teachers</h3>
              <p className="text-sm text-gray-600">
                Learn from qualified Quran teachers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

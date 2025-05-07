"use client";

import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="space-y-6 z-10">
      <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
        Online Quran Learning
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 leading-tight">
        Learn Quran with Expert Teachers{" "}
        <span className="text-emerald-600">Online</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Join our comprehensive Quran learning program with certified teachers.
        Flexible scheduling, personalized attention, and interactive classes for
        all ages.
      </p>

      <div className="hidden md:block">
        <div className=" flex flex-wrap gap-4">
          <Link
            href="/register"
            className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-2"
          >
            <span>Start Free Trial</span>
          </Link>
          <Link
            href="/courses"
            className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors flex items-center gap-2"
          >
            <span>Explore Courses</span>
          </Link>
          <Link
            href="/video"
            className="px-6 py-3 bg-white text-emerald-800 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Watch Video</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

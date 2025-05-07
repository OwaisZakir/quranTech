"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const aboutContent = [
  {
    title: "Our History",
    heading: "About Islamic Center",
    description: [
      "We established our center in 1954 to provide a spiritual and educational hub for the community. Our mission is to inspire, educate, and unify.",
      "Over the decades, we have grown with dedication to authentic teachings and a welcoming environment for learners of all ages.",
    ],
    image: "/assets/images/abt.jpg", // Make sure this path exists in /public
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="container mx-auto px-4">
        {aboutContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* IMAGE WITH STYLED FRAME */}
            <div className="relative w-full lg:w-1/3">
              <div className="absolute top-6 -left-6 w-full h-full border-[9px] border-emerald-400 rounded-lg z-0" />
              <Image
                src={item.image}
                alt={item.heading}
                width={600}
                height={400}
                className="relative z-10 rounded-lg shadow-xl object-cover w-full h-auto"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-3">
                {item.title}
              </div>

              <Typography
                variant="h3"
                className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 leading-snug"
              >
                {item.heading}
              </Typography>

              <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6" />

              {item.description.map((para, idx) => (
                <Typography
                  key={idx}
                  className="text-gray-700 mb-4 text-lg leading-relaxed"
                >
                  {para}
                </Typography>
              ))}

              <Button
                variant="contained"
                className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md shadow transition-colors normal-case"
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

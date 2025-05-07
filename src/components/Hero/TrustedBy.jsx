"use client";

import Image from "next/image";

const flags = [
  "/assets/flags/flag-1.svg",
  "/assets/flags/flag-2.svg",
  "/assets/flags/flag-3.svg",
  "/assets/flags/flag-4.svg",
];

const TrustedBy = () => {
  return (
    <div className="pt-8">
      <p className="text-sm text-gray-500 mb-3">Trusted by students from</p>
      <div className="flex flex-wrap gap-6 items-center">
        {flags.map((flag, index) => (
          <div
            key={index}
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <Image
              src={flag}
              alt={`Flag ${index + 1}`}
              width={100}
              height={30}
              className="h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

"use client";

import Image from "next/image";

const Decoration = () => {
  return (
    <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none">
      <Image
        src="/assets/logo/quran_logo.png"
        alt="Islamic Pattern"
        width={384}
        height={384}
        className="object-contain"
      />
    </div>
  );
};

export default Decoration;

import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/" className="flex items-center space-x-2">
    <div className="relative h-12 w-12 md:h-16 md:w-16">
      <Image
        src="/assets/logo/quran_logo.png"
        alt="QuranTeach Logo"
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
    <div>
      <h1 className="text-xl md:text-2xl font-bold text-emerald-800">
        QuranTeach
      </h1>
      <p className="text-xs md:text-sm text-emerald-600">Learn Quran Online</p>
    </div>
  </Link>
);

export default Logo;

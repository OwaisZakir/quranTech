import Link from "next/link";
import Dropdown from "./Dropdown";

const NavLinks = () => (
  <>
    <Link
      href="/"
      className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
    >
      Home
    </Link>

    <Dropdown
      label="Courses"
      links={[
        { href: "/courses/quran-reading", label: "Quran Reading" },
        { href: "/courses/tajweed", label: "Tajweed Rules" },
        { href: "/courses/memorization", label: "Quran Memorization" },
        { href: "/courses/tafsir", label: "Quran Tafsir" },
      ]}
    />

    <Dropdown
      label="Teachers"
      links={[
        { href: "/teachers/male", label: "Male Teachers" },
        { href: "/teachers/female", label: "Female Teachers" },
        { href: "/teachers/profiles", label: "Teacher Profiles" },
      ]}
    />

    <Link
      href="/about"
      className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
    >
      About Us
    </Link>
    <Link
      href="/testimonials"
      className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
    >
      Testimonials
    </Link>
    <Link
      href="/contact"
      className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors"
    >
      Contact
    </Link>
  </>
);

export default NavLinks;

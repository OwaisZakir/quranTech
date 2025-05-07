import Link from "next/link";
import Image from "next/image";
import { X, Phone, Mail, Clock, ChevronDown } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div className="mobile-menu lg:hidden fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl z-50 transform translate-x-full opacity-0">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/assets/logo/quran_logo.png"
                  alt="QuranTeach Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h2 className="text-lg font-bold text-emerald-800">QuranTeach</h2>
            </div>
            <button
              className="text-emerald-800 hover:text-emerald-600 transition-colors"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-4">
            <NavItem href="/" label="Home" onClose={onClose} />

            <Dropdown
              label="Courses"
              items={[
                { href: "/courses/quran-reading", label: "Quran Reading" },
                { href: "/courses/tajweed", label: "Tajweed Rules" },
                { href: "/courses/memorization", label: "Quran Memorization" },
                { href: "/courses/tafsir", label: "Quran Tafsir" },
              ]}
              onClose={onClose}
            />

            <Dropdown
              label="Teachers"
              items={[
                { href: "/teachers/male", label: "Male Teachers" },
                { href: "/teachers/female", label: "Female Teachers" },
                { href: "/teachers/profiles", label: "Teacher Profiles" },
              ]}
              onClose={onClose}
            />

            <NavItem href="/about" label="About Us" onClose={onClose} />
            <NavItem
              href="/testimonials"
              label="Testimonials"
              onClose={onClose}
            />
            <NavItem href="/contact" label="Contact" onClose={onClose} />
          </nav>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-4">
            <Link
              href="/login"
              className="block w-full px-4 py-2 text-center border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
              onClick={onClose}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="block w-full px-4 py-2 text-center bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
              onClick={onClose}
            >
              Register
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-4">
            <ContactInfo icon={Phone} text="+1 (234) 567-8901" />
            <ContactInfo icon={Mail} text="info@quranteach.com" />
            <ContactInfo icon={Clock} text="Classes Available 24/7" />
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ href, label, onClose }) => (
  <Link
    href={href}
    className="text-emerald-900 hover:text-emerald-600 font-medium transition-colors py-2 border-b border-gray-100"
    onClick={onClose}
  >
    {label}
  </Link>
);

const Dropdown = ({ label, items, onClose }) => (
  <div className="py-2 border-b border-gray-100">
    <div className="flex items-center justify-between text-emerald-900 font-medium mb-2">
      <span>{label}</span>
      <ChevronDown className="h-4 w-4" />
    </div>
    <div className="pl-4 space-y-2 mt-2">
      {items.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="block text-sm text-gray-700 hover:text-emerald-600"
          onClick={onClose}
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-4 w-4 text-emerald-600" />
    <span className="text-sm">{text}</span>
  </div>
);

export default MobileMenu;

"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import TopBar from "./TopBar";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const topBarRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(topBarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.from(logoRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });
    gsap.from(menuRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    gsap.to(".mobile-menu", {
      x: isMenuOpen ? 0 : "100%",
      opacity: isMenuOpen ? 1 : 0,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`w-full transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div ref={topBarRef}>
        <TopBar />
      </div>

      <div
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div ref={logoRef}>
            <Logo />
          </div>

          <nav ref={menuRef} className="hidden lg:flex items-center space-x-8">
            <NavLinks />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Register
            </Link>
          </div>

          <button
            className="lg:hidden text-emerald-800 hover:text-emerald-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default HeaderNav;

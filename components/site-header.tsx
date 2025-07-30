"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building, Home, Users, Hammer, ImageIcon, Mail, Star, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-white text-black shadow-md transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Building className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Kaso Construction</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary flex items-center gap-1"><Home className="h-4 w-4" /> Home</Link>
          <Link href="/about" className="hover:text-primary flex items-center gap-1"><Users className="h-4 w-4" /> About</Link>
          <Link href="/services" className="hover:text-primary flex items-center gap-1"><Hammer className="h-4 w-4" /> Services</Link>
          <Link href="/projects" className="hover:text-primary flex items-center gap-1"><ImageIcon className="h-4 w-4" /> Projects</Link>
          <Link href="/testimonials" className="hover:text-primary flex items-center gap-1"><Star className="h-4 w-4" /> Testimonials</Link>
          <Link href="/contact" className="hover:text-primary flex items-center gap-1"><Mail className="h-4 w-4" /> Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-primary">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-4 space-y-4 text-sm font-medium">
          <Link href="/" className="hover:text-primary flex items-center gap-2"><Home className="h-4 w-4" /> Home</Link>
          <Link href="/about" className="hover:text-primary flex items-center gap-2"><Users className="h-4 w-4" /> About</Link>
          <Link href="/services" className="hover:text-primary flex items-center gap-2"><Hammer className="h-4 w-4" /> Services</Link>
          <Link href="/projects" className="hover:text-primary flex items-center gap-2"><ImageIcon className="h-4 w-4" /> Projects</Link>
          <Link href="/testimonials" className="hover:text-primary flex items-center gap-2"><Star className="h-4 w-4" /> Testimonials</Link>
          <Link href="/contact" className="hover:text-primary flex items-center gap-2"><Mail className="h-4 w-4" /> Contact</Link>
        </nav>
      )}
    </header>
  );
}

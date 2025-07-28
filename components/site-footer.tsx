import Link from "next/link";
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-7 w-7 text-white" />
            <span className="text-xl font-bold">Kaso Constructions</span>
          </Link>
          <p className="text-sm leading-relaxed opacity-80">
            Crafting Durable Elegance in Every Surface. Specializing in tiles, terrazzo,
            granite, and mosaic installations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline hover:text-white/90 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline hover:text-white/90 transition">
                Products & Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline hover:text-white/90 transition">
                Projects Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:underline hover:text-white/90 transition">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-white/90 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>123 Construction Lane, City, Country</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-1" />
              <span>info@kasoconstructions.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white/80 transition">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white/80 transition">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-white/80 transition">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} Kaso Constructions. All rights reserved.
      </div>
    </footer>
  );
}

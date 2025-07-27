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
    <footer className="bg-primary text-white py-12 mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-white" />
            <span className="inline-block font-bold text-xl">Kaso Constructions</span>
          </Link>
          <p className="text-sm opacity-80">
            Crafting Durable Elegance in Every Surface. Specializing in tiles, terrazzo,
            granite, and mosaic installations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/products" className="hover:underline">Products & Services</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects Gallery</Link></li>
            <li><Link href="/testimonials" className="hover:underline">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Info</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Construction Lane, City, Country</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@kasoconstructions.com</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <Link href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gray-300">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-gray-300">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container text-center text-sm opacity-80 pt-10 mt-10 border-t border-white/20">
        &copy; {new Date().getFullYear()} Kaso Constructions. All rights reserved.
      </div>
    </footer>
  );
}

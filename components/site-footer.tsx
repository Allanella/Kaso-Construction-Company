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
    <footer className="bg-primary text-white mt-20 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-2 text-white hover:opacity-90 transition">
            <Building className="h-7 w-7" />
            <span className="text-2xl font-extrabold">Kaso Constructions</span>
          </Link>
          <p className="text-sm text-white/80 leading-relaxed max-w-xs">
            Crafting Durable Elegance in Every Surface. We specialize in tiles,
            terrazzo, granite, and mosaic installations that stand the test of time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            {[
              { name: "About Us", href: "/about" },
              { name: "Products & Services", href: "/products" },
              { name: "Projects Gallery", href: "/projects" },
              { name: "Testimonials", href: "/testimonials" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold tracking-wide">Contact Info</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5" />
              <span>123 Construction Lane, Kampala, Uganda</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5" />
              <span>+256 700 000 000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 mt-0.5" />
              <span>info@kasoconstructions.com</span>
            </li>
          </ul>

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

      {/* Footer bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/70">
        &copy; {new Date().getFullYear()} Kaso Constructions. All rights reserved.
      </div>
    </footer>
  );
}

"use client";

import {
  Mail,
  PhoneCall,
  MapPin,
  Send,
  MessageSquareText,
  Facebook,
  Instagram,
} from "lucide-react";
import { SiTiktok } from "react-icons/si"; // TikTok icon from react-icons

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-16 text-gray-800">
      {/* Increased top padding to fully show heading */}
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-900 tracking-wide">
        Contact Us
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-10 bg-white p-10 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-start gap-5">
            <MapPin className="text-blue-700 w-7 h-7 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1 text-blue-900">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Opposite Leisure Park, Kitoro, Entebbe, Uganda
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <PhoneCall className="text-blue-700 w-7 h-7 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1 text-blue-900">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">
                +256 763 567391<br />
                +256 764 4773432 
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <Mail className="text-blue-700 w-7 h-7 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1 text-blue-900">Email</h3>
              <p className="text-gray-600 leading-relaxed">info@kasoconstruction.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Follow Us</h3>
            <div className="flex items-center gap-6 text-gray-700">
              <a
                href="https://www.facebook.com/share/19MxK25nBM/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com/YourKasoPage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-500 hover:text-pink-700 transition"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="https://www.tiktok.com/@katodavid800?_t=ZM-8yRDFFNfhqw&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-black hover:text-gray-700 transition"
              >
                <SiTiktok className="w-7 h-7" />
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/256700000000?text=Hello%20Kaso%20Construction%2C%20I%20would%20like%20to%20make%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            <MessageSquareText className="w-6 h-6" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Right: Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.0540213140986!2d32.459694914368805!3d0.05768412650434945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0545075ff1%3A0x987db64644df2d2b!2sLeisure%20Park%20Entebbe!5e0!3m2!1sen!2sug!4v1690823456220!5m2!1sen!2sug"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kaso Construction Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold mb-8 text-blue-900 tracking-wide">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="allan b"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

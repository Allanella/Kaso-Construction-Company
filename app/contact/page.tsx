"use client";

import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Globe,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 p-6 flex items-center justify-center">
      <section className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Let’s build something great together. Reach out to discuss your project!
        </p>

        <div className="space-y-6 text-gray-700 text-base">
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Phone (Uganda):</p>
              <p>+256 763 567 391, +256 764 773 432</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Phone (KSA):</p>
              <p>+966 543 361 302</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Email:</p>
              <a
                href="mailto:allanbaliddawa@gmail.com"
                className="text-blue-700 hover:underline"
              >
                allanbaliddawa@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 text-blue-600 mt-1" />
            <div>
              <p className="font-semibold">Office Hours:</p>
              <p>Monday – Friday, 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Our Services</h1>
        <ul className="space-y-6 text-lg">
          <li className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Residential & Apartment Construction</h2>
            <p>Design and build of modern homes and apartments tailored to lifestyle and comfort.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Educational Facilities</h2>
            <p>Development of schools, universities, and training centers with future-ready designs.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Healthcare Infrastructure</h2>
            <p>Hospitals, clinics, and wellness centers built with precision and patient comfort in mind.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Hotel & Hospitality Buildings</h2>
            <p>We construct elegant, guest-oriented spaces for tourism and travel industries.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Warehouses & Industrial Facilities</h2>
            <p>Functional and scalable storage and logistics solutions.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">Land Development</h2>
            <p>Buying, selling, excavation, and leveling for optimized site preparation.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

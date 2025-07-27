import React from "react";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">Featured Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-xl shadow-md overflow-hidden">
            <img src="/images/project1.jpg" alt="Residential Complex" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Modern Apartment Block</h2>
              <p>Multi-unit residential apartments with modern amenities and sustainable materials.</p>
            </div>
          </div>

          <div className="border rounded-xl shadow-md overflow-hidden">
            <img src="/images/project2.jpg" alt="School Campus" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">International School</h2>
              <p>Purpose-built educational facility featuring classrooms, labs, and sports facilities.</p>
            </div>
          </div>

          <div className="border rounded-xl shadow-md overflow-hidden">
            <img src="/images/project3.jpg" alt="Hospital Building" className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Community Hospital</h2>
              <p>A fully equipped healthcare center focused on accessibility and modern care standards.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

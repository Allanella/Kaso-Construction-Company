import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Residential & Apartment Construction",
    description: "Design and build of modern homes and apartments tailored to lifestyle and comfort.",
    image: "/images/porcelain1.jpg",
  },
  {
    title: "Educational Facilities",
    description: "Development of schools, universities, and training centers with future-ready designs.",
    image: "/images/school1.jpg",
  },
  {
    title: "Healthcare Infrastructure",
    description: "Hospitals, clinics, and wellness centers built with precision and patient comfort in mind.",
    image: "/images/hospital.png",
  },
  {
    title: "Hotel & Hospitality Buildings",
    description: "We construct elegant, guest-oriented spaces for tourism and travel industries.",
    image: "/images/hotel.png",
  },
  {
    title: "Warehouses & Industrial Facilities",
    description: "Functional and scalable storage and logistics solutions.",
    image: "/images/warehouse.png",
  },
  {
    title: "Land Development",
    description: "Buying, selling, excavation, and leveling for optimized site preparation.",
    image: "/images/land1.jpg",
  },
  {
    title: "Painting Services",
    description: "Professional interior and exterior painting with durable and beautiful finishes.",
    image: "/images/paint2.png",
  },
  {
    title: "Electrical Engineering",
    description: "Comprehensive electrical installations, maintenance, and safety solutions.",
    image: "/images/electrical.png",
  },
  {
    title: "Camera Installation",
    description: "Security camera setup and surveillance system integration for safety and monitoring.",
    image: "/images/camera.png",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Services</h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, image }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                  priority={false}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-blue-800">{title}</h2>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

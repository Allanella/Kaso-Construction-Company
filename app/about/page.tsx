import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4">
      <section className="max-w-6xl mx-auto bg-card p-10 rounded-2xl shadow-lg border border-muted">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
          About Kaso Construction
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Building a Legacy of Excellence Across Uganda and Africa
        </p>

        {/* Grid layout for image + text */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Flyer Image */}
          <div className="w-full">
            <Image
              src="/images/kaso.jpg" 
              alt="Kaso Construction Company Flyer"
              width={600}
              height={800}
              className="rounded-xl shadow-md object-cover w-full h-auto"
            />
          </div>

          {/* Company Info */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground font-semibold">Kaso Construction Company</strong> is a trusted leader in
              building and land development, known for our unwavering commitment to quality, integrity, and innovation.
              We bring expertise to projects in residential, educational, hospitality, healthcare, and commercial sectors.
            </p>

            <p>
              With a growing footprint in Uganda and across the African continent, we pride ourselves on exceeding
              expectations while upholding the highest standards of safety, sustainability, and professionalism.
            </p>

            <p>
              Our multidisciplinary team of architects, engineers, project managers, and skilled tradespeople
              collaborates to bring each vision to life. Every project we undertake reflects our passion for excellence
              and our dedication to building enduring spaces that serve communities for generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

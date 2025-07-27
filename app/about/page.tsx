import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4">
      <section className="max-w-5xl mx-auto bg-card p-10 rounded-2xl shadow-md border border-muted">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 text-center">
          About Kaso Construction
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
          Building a Legacy of Excellence in Uganda and the Middle East
        </p>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground font-semibold">Kaso Construction Company</strong> is a premier
            building and land development firm committed to quality, trust, and innovation. We specialize in
            delivering residential, educational, hospitality, health, and commercial infrastructure.
          </p>
          <p>
            With a strong presence in Uganda and the Middle East, our firm has earned a reputation for exceeding
            client expectations while maintaining the highest standards of safety and sustainability.
          </p>
          <p>
            Our team of experienced architects, engineers, project managers, and tradespeople work collaboratively to
            transform ideas into impactful spaces. Every project is approached with precision, professionalism, and a
            passion for excellence.
          </p>
        </div>
      </section>
    </main>
  );
}

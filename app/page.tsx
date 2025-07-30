import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Hammer, Star, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
        <Image
          src="/images/crane.png"
          alt="Kaso Construction Company – We Build Your Dream Home"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full px-4 sm:px-6 py-12 flex flex-col items-center justify-center text-center text-white">
          <div className="w-full max-w-5xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We Build Your Dream Home
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Kaso Construction specializes in building homes, apartments, schools,
              hotels, hospitals, warehouses and more—serving Uganda and beyond.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              We also buy and sell land, offer land excavation and leveling services
              with professionalism and integrity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="/services">Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container text-center max-w-3xl px-4 sm:px-6 space-y-6 text-gray-800">
        <h2 className="text-2xl sm:text-4xl font-bold">Welcome to Kaso Construction</h2>
        <p className="text-base sm:text-lg text-gray-700">
          With a strong foundation in engineering and a passion for excellence, Kaso
          Construction is your trusted partner for building safe, functional, and inspiring
          spaces.
        </p>
        <Button asChild variant="link" className="text-primary hover:text-primary/80">
          <Link href="/about">Learn More About Us</Link>
        </Button>
      </section>

      {/* Services Section */}
      <section className="container px-4 sm:px-6 space-y-8 bg-gray-100 py-12 rounded-xl">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900">
          Our Core Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Hammer className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
              title: "Residential & Commercial Construction",
              description:
                "Complete building solutions for homes, apartments, schools, hospitals, and commercial properties.",
            },
            {
              icon: <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
              title: "Land Services",
              description:
                "We buy and sell land, and offer expert excavation and leveling services.",
            },
            {
              icon: <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
              title: "Project Consultation",
              description:
                "Expert advice and project planning to ensure successful construction outcomes.",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="text-center p-6 shadow-md bg-white border border-gray-200"
            >
              <CardHeader>
                {service.icon}
                <CardTitle className="text-lg sm:text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
          >
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900">
          Client Testimonials
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {[
            {
              name: "Sarah A., Property Developer",
              feedback:
                "Kaso Construction built our apartment complex on time and exceeded our expectations. Highly reliable and professional!",
            },
            {
              name: "Michael K., Landowner",
              feedback:
                "I sold my land through Kaso, and their process was smooth, transparent, and fair. I’d recommend them to anyone in the region.",
            },
          ].map((t, i) => (
            <Card
              key={i}
              className="p-6 bg-white border border-gray-200 text-gray-800"
            >
              <CardContent className="space-y-4">
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-gray-700">"{t.feedback}"</p>
                <p className="font-semibold">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            variant="link"
            className="text-primary hover:text-primary/80"
          >
            <Link href="/testimonials">Read More Testimonials</Link>
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="container px-4 sm:px-6 space-y-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900">
          See Our Work in Action
        </h2>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-300">
          <video
            className="w-full h-full object-cover"
            src="/videos/construction-showcase.mp4"
            controls
            loop
            muted
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>
        <p className="text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
          Experience the dedication and precision of Kaso Construction—watch how we
          bring ambitious projects to life.
        </p>
      </section>
    </div>
  );
}

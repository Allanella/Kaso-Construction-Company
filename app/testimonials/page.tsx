import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah A.",
    title: "Property Developer",
    quote:
      "Kaso Construction built our apartment complex on time and exceeded our expectations. Highly reliable and professional!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael K.",
    title: "Landowner",
    quote:
      "I sold my land through Kaso, and their process was smooth, transparent, and fair. I’d recommend them to anyone in the region.",
    rating: 5,
  },
  {
    id: 3,
    name: "Diana N.",
    title: "School Director",
    quote:
      "Kaso Construction helped us construct our new school facility. The work was top-notch, and the team was a pleasure to work with.",
    rating: 5,
  },
  {
    id: 4,
    name: "George T.",
    title: "Hospital Administrator",
    quote:
      "They delivered our hospital project ahead of schedule with exceptional quality. Their experience really showed in the execution.",
    rating: 4,
  },
  {
    id: 5,
    name: "Rebecca M.",
    title: "Homeowner",
    quote:
      "Kaso turned our vision into reality. Our new home is beautiful and built to last. Great attention to detail!",
    rating: 5,
  },
  {
    id: 6,
    name: "Isaac W.",
    title: "Warehouse Operator",
    quote:
      "Professional and reliable. The warehouse construction was seamless from start to finish. I will definitely use them again.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container py-20 space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
          What Our Clients Say
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real stories from real clients who trusted Kaso Construction for their projects.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="bg-background border border-muted rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <CardHeader className="p-6 border-b border-border">
              <div className="flex items-center gap-1 text-yellow-500 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-muted-foreground" />
                ))}
              </div>
              <CardTitle className="text-2xl font-bold text-blue-900">
                {testimonial.name}
              </CardTitle>
              <p className="text-sm text-gray-600 italic">{testimonial.title}</p>
            </CardHeader>
            <CardContent className="p-6 text-base text-muted-foreground leading-relaxed">
              <p className="italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

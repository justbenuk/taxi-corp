'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Regular Customer",
    rating: 5,
    text: "I've been using Acorn Taxis for over 10 years. Always reliable, professional drivers, and great service. Wouldn't use anyone else!",
    location: "Tamworth"
  },
  {
    name: "James Thompson",
    role: "Corporate Client",
    rating: 5,
    text: "We use Acorn for all our corporate travel needs. The monthly invoicing system is perfect for our business, and the drivers are always punctual and professional.",
    location: "Lichfield"
  },
  {
    name: "Emma Davies",
    role: "Airport Transfers",
    rating: 5,
    text: "Fantastic airport transfer service! The driver tracked my flight and was waiting when I landed. Made my journey home so stress-free.",
    location: "Birmingham Airport"
  },
  {
    name: "Michael Roberts",
    role: "Night Shift Worker",
    rating: 5,
    text: "As someone who works late shifts, it's reassuring to know Acorn is available 24/7. Always feel safe and the prices are very reasonable.",
    location: "Tamworth"
  },
  {
    name: "Lisa Patel",
    role: "Regular Customer",
    rating: 5,
    text: "The app makes booking so easy! I love being able to track my driver in real-time. The whole service is modern and efficient.",
    location: "Fazeley"
  },
  {
    name: "David Wilson",
    role: "Elderly Care",
    rating: 5,
    text: "My elderly mother uses Acorn regularly for hospital appointments. The drivers are always patient, helpful, and treat her with respect. Thank you!",
    location: "Tamworth"
  }
];

interface TestimonialsProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

export default function Testimonials({
  title = "What Our Customers Say",
  description = "Don't just take our word for it - hear from our satisfied customers",
  showAll = true
}: TestimonialsProps) {
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-accent fill-accent" />
              <Star className="h-8 w-8 text-accent fill-accent mx-1" />
              <Star className="h-8 w-8 text-accent fill-accent" />
              <Star className="h-8 w-8 text-accent fill-accent mx-1" />
              <Star className="h-8 w-8 text-accent fill-accent" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow relative">
                  <CardContent className="p-6">
                    <Quote className="h-10 w-10 text-accent/20 mb-4" />

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-accent fill-accent"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Customer Info */}
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Overall Rating Summary */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="inline-block bg-background rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold mr-2">4.5</span>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 1,200+ reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

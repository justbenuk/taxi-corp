'use client';

import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Plane, ShoppingBag, Building2, Car, MapPin, CreditCard, Clock, Shield, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/sections/hero";

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

const mainServices = [
  {
    icon: ShoppingBag,
    title: "Everyday Travel",
    description: "Reliable local taxi service for all your daily transportation needs across Tamworth and surrounding areas.",
    image: "/assets/shop.jpg",
    features: [
      "Local journeys",
      "Shopping trips",
      "Hospital appointments",
      "Social visits",
      "School runs",
      "Station transfers"
    ]
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Professional airport transfer service to all major UK airports with flight monitoring and meet & greet options.",
    image: "/assets/airport.jpg",
    features: [
      "Birmingham Airport",
      "East Midlands Airport",
      "Heathrow Airport",
      "Gatwick Airport",
      "Luton Airport",
      "Stansted Airport"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Accounts",
    description: "Tailored business travel solutions with monthly invoicing, priority service, and dedicated account management.",
    image: "/assets/corporate.jpg",
    features: [
      "Monthly invoicing",
      "Multiple user accounts",
      "Priority booking",
      "Dedicated support",
      "Journey reporting",
      "Flexible payment terms"
    ]
  }
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service, 365 days a year"
  },
  {
    icon: Shield,
    title: "CRB/DBS Checked",
    description: "All drivers fully vetted and licensed"
  },
  {
    icon: CreditCard,
    title: "Card Payments",
    description: "Cash, card, and contactless accepted"
  },
  {
    icon: MapPin,
    title: "GPS Tracked",
    description: "Modern fleet with live tracking"
  }
];

const airports = [
  { name: "Birmingham Airport", distance: "25 miles", time: "~35 mins" },
  { name: "East Midlands Airport", distance: "20 miles", time: "~30 mins" },
  { name: "Heathrow Airport", distance: "110 miles", time: "~2 hrs" },
  { name: "Gatwick Airport", distance: "140 miles", time: "~2.5 hrs" },
  { name: "Luton Airport", distance: "80 miles", time: "~1.5 hrs" },
  { name: "Stansted Airport", distance: "100 miles", time: "~2 hrs" }
];

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroSection title="Professional Taxi Services" description="
              With over 50 years of experience, Acorn Taxis provides reliable, safe, and comfortable
              transportation across Tamworth and beyond. Available 24/7 for all your travel needs.
            " url="/assets/hero.jpg" />

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-background">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whatever your transportation needs, we&apos;ve got you covered
              </p>
            </motion.div>

            <div className="space-y-16">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">{service.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-accent mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-accent text-primary hover:bg-accent/90" asChild>
                        <Link href="/book-now">Book This Service</Link>
                      </Button>
                    </div>

                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Acorn Taxis?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Over 50 years of trusted service in Tamworth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="text-center h-full">
                      <CardHeader>
                        <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* Airport Coverage */}
      <section className="py-16 lg:py-24 bg-background">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <Plane className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Airport Coverage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional transfers to all major UK airports with flight monitoring and meet & greet service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {airports.map((airport, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{airport.name}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {airport.distance}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Approx. {airport.time}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                All journey times are approximate and may vary depending on traffic conditions
              </p>
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90" asChild>
                <Link href="/book-now">Book Airport Transfer</Link>
              </Button>
            </motion.div>
          </motion.div>
        </PageContainer>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Service Coverage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Based in Tamworth, we serve a wide area across Staffordshire and the surrounding regions
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-left mb-8">
                {[
                  "Tamworth",
                  "Lichfield",
                  "Atherstone",
                  "Polesworth",
                  "Fazeley",
                  "Kingsbury",
                  "Dordon",
                  "Wilnecote",
                  "Amington",
                  "Glascote",
                  "Dosthill",
                  "Shuttington"
                ].map((area, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-2 shrink-0" />
                    <span>{area}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground">
                Don&apos;t see your area? Give us a call on <span className="font-semibold text-accent">01827 63333</span> - we may still be able to help!
              </p>
            </motion.div>
          </motion.div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-secondary">
        <PageContainer>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Car className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Travel with Acorn?</h2>
            <p className="text-lg mb-8 text-secondary/90">
              Book your journey today and experience our professional, reliable taxi service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90" asChild>
                <Link href="/book-now">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </PageContainer>
      </section>
    </motion.main>
  );
}

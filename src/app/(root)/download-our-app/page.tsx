'use client';

import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Smartphone, MapPin, CreditCard, Clock, Bell, Star, Download, QrCode, Apple, } from "lucide-react";
import Image from "next/image";

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

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your driver's location in real-time and get accurate arrival times."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Save your payment details for quick, cashless transactions every time."
  },
  {
    icon: Clock,
    title: "Book in Advance",
    description: "Schedule rides hours or days ahead for airport transfers and important journeys."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get updates when your driver is assigned, arriving, and on the way."
  },
  {
    icon: Star,
    title: "Favorite Locations",
    description: "Save home, work, and frequent destinations for one-tap booking."
  },
  {
    icon: Download,
    title: "Journey History",
    description: "Access all your past rides, receipts, and payment records in one place."
  }
];

const steps = [
  {
    number: "1",
    title: "Download the App",
    description: "Get it free from the App Store or Google Play"
  },
  {
    number: "2",
    title: "Create Account",
    description: "Sign up in seconds with your phone number"
  },
  {
    number: "3",
    title: "Add Payment",
    description: "Securely save your preferred payment method"
  },
  {
    number: "4",
    title: "Book Your Ride",
    description: "Enter destination and confirm - it's that easy!"
  }
];

export default function DownloadAppPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative bg-primary text-secondary py-20 lg:py-28 overflow-hidden">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-accent text-primary">Mobile App</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Book Your Ride in Seconds</h1>
              <p className="text-lg lg:text-xl mb-8 text-secondary/90">
                Download the Acorn Taxis app for the fastest, easiest way to book a taxi.
                Track your driver, pay securely, and manage all your journeys from your phone.
              </p>

              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-black/90">
                  <Apple className="mr-2 h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </Button>

                <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-black/90 sm:ml-4">
                  <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>

              <p className="text-sm text-secondary/70">
                Available for iOS 12.0+ and Android 8.0+
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-[300px] h-[600px] lg:w-[350px] lg:h-[700px]">
                {/* Phone mockup placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary rounded-[3rem] shadow-2xl border-8 border-gray-800 flex items-center justify-center">
                  <Smartphone className="h-32 w-32 text-accent/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </div>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Everything You Need in One App</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to make your journey seamless
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Getting Started is Simple</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From download to your first ride in minutes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <div className="h-16 w-16 rounded-full bg-accent text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* QR Code Section */}
      <section className="py-16 lg:py-24 bg-background">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <motion.div variants={itemVariants}>
                    <QrCode className="h-12 w-12 text-accent mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Quick Download</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Scan the QR code with your phone's camera to download the app instantly.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-accent text-xs font-bold">1</span>
                        </div>
                        <p className="text-sm">Open your camera app</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-accent text-xs font-bold">2</span>
                        </div>
                        <p className="text-sm">Point at the QR code</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <span className="text-accent text-xs font-bold">3</span>
                        </div>
                        <p className="text-sm">Tap the notification to download</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="bg-secondary/30 p-8 lg:p-12 flex items-center justify-center"
                >
                  <div className="relative w-64 h-64 bg-white p-4 rounded-lg shadow-lg">
                    <Image
                      src="/assets/qr.png"
                      alt="Download app QR code"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </PageContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-primary text-secondary">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants}>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-lg text-secondary/90">Years of Service</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">24/7</div>
                <div className="text-lg text-secondary/90">Always Available</div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">4.8★</div>
                <div className="text-lg text-secondary/90">Customer Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-background">
        <PageContainer>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Smartphone className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Experience Easy Booking?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download the Acorn Taxis app today and enjoy the convenience of booking, tracking, and paying for your rides all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                <Apple className="mr-2 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </Button>

              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>
        </PageContainer>
      </section>
    </motion.main>
  );
}

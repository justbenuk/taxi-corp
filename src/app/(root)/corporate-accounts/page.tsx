'use client';

import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Users, FileText, CreditCard, Clock, Shield, Phone, Mail } from "lucide-react";
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

const benefits = [
  {
    icon: FileText,
    title: "Monthly Invoicing",
    description: "Consolidated monthly billing for all journeys, making expense management simple and efficient."
  },
  {
    icon: Users,
    title: "Professional Drivers",
    description: ""
  },
  {
    icon: CreditCard,
    title: "30 Day",
    description: "30-day payment terms available."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock service for your business needs, including early morning and late night transfers."
  },
  {
    icon: Shield,
    title: "Priority Service",
    description: "Priority booking and dispatch for corporate account holders during peak times."
  },
  {
    icon: Phone,
    title: "Dedicated Support",
    description: "Direct line to our corporate team for account management and journey support."
  }
];


export default function CorporateAccountsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection title="Need Business Travel" description="Streamline your business transportation with Acorn Taxis. Enjoy priority service, consolidated billing, and dedicated support tailored to your company's needs." url='/assets/driver.jpg' />

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Corporate Service?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand the unique needs of businesses and provide tailored solutions to keep your team moving.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle>{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{benefit.description}</p>
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
      <section className="py-16 lg:py-24 bg-secondary">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Getting Started is Easy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Set up your corporate account in three simple steps
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "1", title: "Contact Us", description: "Call us on 01827 63333 or email to discuss your requirements" },
                  { step: "2", title: "Set Up Account", description: "We'll create your account and add your team members" },
                  { step: "3", title: "Start Booking", description: "Book rides online, by phone, or through our app" }
                ].map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <div className="h-16 w-16 rounded-full bg-accent text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-secondary">
        <PageContainer>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Building2 className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Streamline Your Business Travel?</h2>
            <p className="text-lg mb-8 text-secondary/90">
              Join hundreds of businesses across Tamworth who trust Acorn Taxis for their corporate transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                <Phone className="mr-2 h-5 w-5" />
                Call 01827 63333
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                Email inquiries@acorntaxis.co.uk
              </Button>
            </div>
          </motion.div>
        </PageContainer>
      </section>
    </motion.main>
  );
}

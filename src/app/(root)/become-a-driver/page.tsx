'use client';

import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Car, Wallet, Clock, Users, Shield, TrendingUp, Phone, Mail, Check, HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    icon: Wallet,
    title: "Competitive Earnings",
    description: "Keep 80% of your takings with transparent pricing and no hidden fees."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Choose when you work - full-time, part-time, or weekend only. You're in control."
  },
  {
    icon: Users,
    title: "Established Customer Base",
    description: "Join a company with 50+ years of trusted service and loyal customers."
  },
  {
    icon: TrendingUp,
    title: "Regular Work",
    description: "Consistent bookings throughout the day and night with our busy dispatch system."
  },
  {
    icon: Shield,
    title: "Support & Training",
    description: "Comprehensive onboarding and ongoing support from our experienced team."
  },
  {
    icon: Car,
    title: "Modern Dispatch",
    description: "State-of-the-art booking system with GPS tracking and mobile app."
  }
];

const requirements = [
  "Valid UK driving licence (held for at least 3 years)",
  "Private hire driver's licence (we can help you obtain this)",
  "Enhanced DBS check (CRB)",
  "Vehicle that meets licensing standards",
  "Insurance for private hire/taxi work",
  "Right to work in the UK",
  "Good knowledge of Tamworth and surrounding areas",
  "Professional, friendly attitude"
];

const faqs = [
  {
    question: "Do I need my own vehicle?",
    answer: "Yes, you'll need access to a vehicle that meets local licensing standards. We can advise on suitable vehicles if needed."
  },
  {
    question: "How much can I earn?",
    answer: "Earnings vary depending on hours worked, but many of our drivers earn £500-£800+ per week. You keep 80% of all fares."
  },
  {
    question: "What are the working hours?",
    answer: "Completely flexible! Work full-time, part-time, evenings, weekends - whatever suits your lifestyle. Many drivers work 20-40 hours per week."
  },
  {
    question: "Do you help with licensing?",
    answer: "Yes! We provide guidance through the entire licensing process including obtaining your private hire driver's licence and DBS check."
  },
  {
    question: "Is there a joining fee?",
    answer: "There's a small weekly subscription to cover the dispatch system and support services. We'll explain all costs upfront with no hidden fees."
  },
  {
    question: "How do I receive payments?",
    answer: "You collect fares directly from customers (cash, card, or app payments) and we provide weekly statements showing all your journeys."
  }
];

const steps = [
  {
    number: "1",
    title: "Get In Touch",
    description: "Call us on 01827 63333 or email to express your interest"
  },
  {
    number: "2",
    title: "Initial Meeting",
    description: "Meet with our team to discuss the role and requirements"
  },
  {
    number: "3",
    title: "Licensing Process",
    description: "We'll guide you through obtaining your private hire licence and DBS"
  },
  {
    number: "4",
    title: "Vehicle Check",
    description: "Your vehicle will be inspected to ensure it meets standards"
  },
  {
    number: "5",
    title: "Training & Setup",
    description: "Learn our dispatch system and get set up with the mobile app"
  },
  {
    number: "6",
    title: "Start Earning",
    description: "Begin accepting bookings and earning from day one!"
  }
];

export default function BecomeADriverPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative bg-primary text-secondary py-20 lg:py-28">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-accent text-primary">Join Our Team</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Become an Acorn Driver</h1>
              <p className="text-lg lg:text-xl mb-8 text-secondary/90">
                Join Tamworth's most established taxi company. Enjoy flexible hours, competitive earnings,
                and the support of a professional team with over 50 years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 01827 63333
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/assets/driver.jpg"
                alt="Become a driver"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </PageContainer>
      </div>

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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Drive for Acorn?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a company that values its drivers and offers real benefits
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

      {/* Requirements Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What You'll Need</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here's what's required to become a driver with Acorn Taxis
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span>{requirement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Don't have everything yet?</strong> Don't worry! We can help guide you through
                      obtaining your private hire licence and DBS check. Get in touch to discuss your situation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </PageContainer>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-24 bg-background">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">How to Join</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started is straightforward. We'll support you every step of the way.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="h-full text-center">
                      <CardHeader>
                        <div className="h-16 w-16 rounded-full bg-accent text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                          {step.number}
                        </div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <PageContainer>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Got questions? We've got answers.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start">
                        <HelpCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground pl-7">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have more questions? We're here to help!
              </p>
              <Button className="bg-accent text-primary hover:bg-accent/90">
                <Phone className="mr-2 h-5 w-5" />
                Call 01827 63333
              </Button>
            </motion.div>
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
            <Car className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 text-secondary/90">
              Join our team of professional drivers and enjoy the flexibility and earnings you deserve.
              With over 50 years serving Tamworth, we're a name you can trust.
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

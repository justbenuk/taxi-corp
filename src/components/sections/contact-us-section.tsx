'use client';

import PageContainer from "@/components/page-container";
import HeroSection from "@/components/sections/hero";
import { MailIcon, MapPin, PhoneIcon, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/forms/contact-form";

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

export default function ContactUsSection() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection title="Contact Acorn Cars" description="24/7 support for all your transport needs" url="/assets/call.jpg" />

      <PageContainer className="py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="font-bold text-3xl lg:text-4xl mb-4">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                We&apos;re here to help 24/7. Contact us by phone, email, or visit us at our office.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10 space-y-6">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-accent rounded-full p-3 shrink-0">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <Link href="tel:01827633333" className="hover:underline">
                    01827 63333
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center">
                <div className="bg-accent rounded-full p-3 shrink-0">
                  <MailIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <Link href="mailto:inquiries@acorntaxis.co.uk" className="hover:underline">
                    inquiries@acorntaxis.co.uk
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-start">
                <div className="bg-accent rounded-full p-3 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>20 Lichfield Street</p>
                  <p>Tamworth, B79 7QD</p>
                  <p className="text-xs text-muted-foreground mt-1">United Kingdom</p>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <div className="bg-accent rounded-full p-3 shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Opening Hours</h3>
                  <p className="text-sm">Monday - Sunday: 24/7</p>
                  <p className="text-xs text-muted-foreground mt-1">We never close</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.445377565653!2d-1.7021586233119443!3d52.6338660720912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870abd7f557dfe5%3A0x4fb02120105db5cb!2sAcorn%20Taxis!5e0!3m2!1sen!2suk!4v1763952237069!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Acorn Taxis Location"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </PageContainer>
    </motion.div>
  );
}


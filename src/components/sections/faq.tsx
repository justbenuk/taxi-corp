'use client';

import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

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

const defaultFaqs = [
  {
    question: "How do I book a taxi?",
    answer: "You can book a taxi in three ways: call us on 01827 63333, use our mobile app (available on iOS and Android), or book online through our website. We're available 24/7 for your convenience."
  },
  {
    question: "What areas do you cover?",
    answer: "We primarily serve Tamworth and surrounding areas including Lichfield, Atherstone, Polesworth, Fazeley, Kingsbury, and more. We also provide airport transfers to all major UK airports. Call us if you're unsure whether we cover your area."
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes! We provide professional airport transfer services to Birmingham, East Midlands, Heathrow, Gatwick, Luton, and Stansted airports. We monitor flight times and offer meet & greet services for arrivals."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit and debit cards, and contactless payments. If you use our mobile app, you can save your payment details for quick, cashless transactions."
  },
  {
    question: "Can I book in advance?",
    answer: "Absolutely! We recommend booking airport transfers and important journeys in advance. You can book hours or even days ahead to ensure availability at your preferred time."
  },
  {
    question: "Are your drivers CRB/DBS checked?",
    answer: "Yes, all our drivers undergo enhanced DBS (CRB) checks and are fully licensed by the local authority. Your safety is our top priority."
  },
  {
    question: "Do you offer corporate accounts?",
    answer: "Yes! We offer tailored corporate account services with monthly invoicing, multiple user management, priority booking, and dedicated support. Contact us to discuss your business needs."
  },
  {
    question: "How quickly can you pick me up?",
    answer: "For immediate bookings, we typically aim to pick you up within 15-20 minutes depending on your location and our current availability. Pre-booked journeys are guaranteed at your specified time."
  },
  {
    question: "Can I track my driver?",
    answer: "Yes! When you book through our mobile app, you can track your driver's location in real-time and see their estimated arrival time."
  },
  {
    question: "What if I need to cancel my booking?",
    answer: "You can cancel your booking by calling us or through the mobile app. We recommend cancelling as soon as possible. Cancellation policies may vary for pre-booked journeys - please ask when booking."
  }
];

interface FAQProps {
  title?: string;
  description?: string;
  faqs?: Array<{ question: string; answer: string }>;
  columns?: 1 | 2;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our taxi services",
  faqs = defaultFaqs,
  columns = 1
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
          </motion.div>

          <div className={`max-w-4xl mx-auto ${columns === 2 ? 'grid grid-cols-1 lg:grid-cols-2 gap-6' : 'space-y-4'}`}>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    openIndex === index ? 'border-accent' : ''
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <CardContent className="p-0">
                    <button
                      className="w-full text-left p-6 flex items-center justify-between"
                      aria-expanded={openIndex === index}
                    >
                      <span className="font-semibold text-lg pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-accent" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-muted-foreground">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01827633333"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Call 01827 63333
              </a>
              <a
                href="mailto:inquiries@acorntaxis.co.uk"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

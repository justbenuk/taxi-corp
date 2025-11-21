"use client";

import { motion } from "framer-motion";
import { Clock3Icon, CreditCard, MapPin, ShieldCheck } from "lucide-react";

const features = [
  { icon: Clock3Icon, text: "50+ Years History" },
  { icon: MapPin, text: "GPS Tracked Fleet" },
  { icon: CreditCard, text: "Card & Contactless" },
  { icon: ShieldCheck, text: "CRB/DBS Checked Drivers" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function HeroFooter() {
  return (
    <section className="bg-secondary">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap lg:flex-row items-center justify-evenly gap-2"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-row items-center gap-2 font-semibold text-primary py-2 text-lg"
          >
            <feature.icon className="size-5" />
            <span>{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


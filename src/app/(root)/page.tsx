"use client";

import { motion } from "framer-motion";
import BecomeaDriver from "@/components/sections/become-a-driver";
import HeroSection from "@/components/sections/hero";
import HeroFooter from "@/components/sections/hero-footer";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <HeroFooter />
      <Services />
      <BecomeaDriver />
    </motion.main>
  );
}

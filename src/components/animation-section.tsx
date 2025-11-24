"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1.0 },
  },
};

export default function AnimationSection({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}


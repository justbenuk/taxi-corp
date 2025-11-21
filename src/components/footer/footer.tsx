"use client";

import { motion } from "framer-motion";
import { MENUITEMS } from "@/data/menu-items";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0 py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <motion.div variants={columnVariants}>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <nav className="flex flex-col space-y-1 text-secondary">
              {MENUITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h2 className="text-lg font-semibold mb-2">Services</h2>
            <nav className="flex flex-col space-y-1 text-secondary">
              <motion.div variants={linkVariants} custom={0}>
                <Link href="/services/#airport" className="hover:text-white transition-colors">
                  Airport Transfers
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={1}>
                <Link href="/services/#pay-by-card" className="hover:text-white transition-colors">
                  Ways To Pay
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={2}>
                <Link href="/corporate-accounts" className="hover:text-white transition-colors">
                  Corporate Accounts
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <nav className="flex flex-col space-y-1 text-secondary">
              <motion.div variants={linkVariants} custom={0}>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={1}>
                <Link href="/become-a-driver" className="hover:text-white transition-colors">
                  Become A Driver
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}


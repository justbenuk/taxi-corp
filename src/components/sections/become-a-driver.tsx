"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 1.0 },
  },
};

export default function BecomeaDriver() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col items-center space-y-2"
        >
          <h2 className="text-4xl font-semibold">Join Our Team</h2>
          <p className="text-muted-foreground">We are looking for professional drivers to join our team</p>
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg"
        >
          <div
            style={{
              backgroundImage: `url('/assets/driver.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="h-[25dvh]"
          >
            <div className="bg-linear-to-l from-primary to-transparent h-full" />
          </div>
          <div className="bg-primary p-8 space-y-8">
            <div className="flex flex-col justify-center h-full space-y-6">
              <h3 className="text-white font-semibold text-2xl">
                Be your own boss.
                <br />
                Work with Acorn Taxis
              </h3>
              <div>
                <Button asChild variant="outline" className="bg-secondary hover:bg-secondary/90">
                  <Link href="/become-a-driver">Learn More About Joining</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


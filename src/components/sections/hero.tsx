"use client";
import { HeroProps } from "@/types/hero-types";
import { motion } from "framer-motion";

export default function HeroSection({ title, description, url }: HeroProps) {
  return (
    <section
      style={{ backgroundImage: `url('${url}')`, backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
      className="h-[40dvh] w-full"
    >
      <div className="bg-linear-to-r from-primary via-primary/80 to-transparent h-full">
        <div className="max-w-7xl mx-auto px-6 2xl:px-0 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">
            <div className="h-full flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white font-medium text-4xl lg:text-6xl"
              >
                {title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-secondary mt-4 text-xl lg:w-3/4"
              >
                <p>{description}</p>
              </motion.div>
            </div>
            <div className="flex flex-col justify-center items-end">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    image: "/assets/every.jpg",
    alt: "Everyday shopping and travel",
    title: "Everyday Travel",
    description: "Enjoy safe, round-the-clock travel to any destination. Our professional drivers are available 24/7 to ensure you reach any city or town in the country in total comfort.",
  },
  {
    image: "/assets/airport.jpg",
    alt: "Airport transfers",
    title: "Airport Transfers",
    description: "Book your airport transfer with us. We service all major airports including Birmingham, East Midlands, Luton, Heathrow, Stanstead and Gatwick",
  },
  {
    image: "/assets/corp.jpg",
    alt: "Corporate accounts",
    title: "Corporate Accounts",
    description: "Streamline your company expenses with our priority account service. We offer consolidated monthly invoicing and fully itemized billing to simplify financial management for your business.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 2xl:px-0 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center space-y-2"
          >
            <Image
              src={service.image}
              alt={service.alt}
              width={300}
              height={300}
              className="w-full h-[250px] rounded-2xl object-cover"
            />
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


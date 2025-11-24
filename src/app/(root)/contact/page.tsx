import type { Metadata } from 'next';
import ContactUsSection from "@/components/sections/contact-us-section";

export const metadata: Metadata = {
  title: 'Get In Touch'
};

export default function ContactPage() {
  return (
    <ContactUsSection />
  )
}


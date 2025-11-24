import type { Metadata } from "next";
import "./globals.css";
import { RootProps } from "@/types/global-types";


export const metadata: Metadata = {
  title: {
    template: "%s | Acorn Taxis - 01827 63333",
    default: "Acorn Taxis"
  },
  description: "Tamworths premier transportation company, available 24/7, 01827 633333",
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

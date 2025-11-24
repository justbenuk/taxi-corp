import Footer from "@/components/footer/footer";
import FrontHeader from "@/components/header/front-header";
import TopHeader from "@/components/header/top-header";
import { RootProps } from "@/types/global-types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Welcome'
}

export default function RootLayout({ children }: RootProps) {
  return (
    <div>
      <TopHeader />
      <FrontHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}


'use client'
import { MENUITEMS } from "@/data/menu-items";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function FrontHeader() {
  const pathname = usePathname()

  return (
    <div className="max-w-7xl mx-auto pz-6 2xl:px-0 py-4">
      <nav className="flex flex-row items-center justify-end gap-6 text-md py-2 px-6 font-semibold">
        {MENUITEMS.map((item, idx) => {
          const isActive = pathname === item.href && 'text-accent underline decoration-accent underline-offset-8'
          return (
            <Link key={idx} href={item.href} className={cn(isActive)}>{item.name}</Link>
          )
        })}
        <Button asChild variant={'ghost'} className="bg-accent text-gray-900">
          <Link href={'/book-now'} className="font-semibold">Book Now</Link>
        </Button>
      </nav>
    </div>

  )
}


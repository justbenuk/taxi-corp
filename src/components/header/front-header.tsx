import { MENUITEMS } from "@/data/menu-items";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FrontHeader() {
  return (
    <div className="max-w-7xl mx-auto pz-6 2xl:px-0 py-4">
      <nav className="flex flex-row items-center justify-end gap-6 text-md py-2 px-6 font-semibold">
        {MENUITEMS.map((item, idx) => (
          <Link key={idx} href={item.href}>{item.name}</Link>
        ))}
        <Button asChild variant={'ghost'} className="bg-accent">
          <Link href={'/book-now'} className="font-semibold">Book A Taxi</Link>
        </Button>
      </nav>
    </div>

  )
}


import { DoorOpenIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-primary text-xs uppercase font-semibold">
      <div className="max-w-7xl mx-auto pz-6 2xl:px-0">
        <div className="flex flex-row items-center justify-end text-white gap-6 py-2 px-6">
          <Link href={'/login'} className="flex flex-row gap-1 items-center">
            <DoorOpenIcon className="text-accent size-4" />
            Login
          </Link>
          <Link href={'/download-our-app'}>Download App</Link>
          <Link href={'tel:0182763333'} className="flex flex-row gap-1 items-center">
            <PhoneCallIcon className="text-accent size-4" />
            01827 63333
          </Link>
        </div>
      </div>
    </div>
  )
}


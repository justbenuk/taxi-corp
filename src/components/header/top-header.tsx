import { DoorOpenIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto pz-6 2xl:px-0">
        <div className="flex flex-row items-center justify-end text-white gap-6 text-md py-2 px-6 font-medium">
          <Link href={'/login'} className="flex flex-row gap-1 items-center">
            <DoorOpenIcon className="text-accent size-4" />
            Login
          </Link>
          <Link href={'/download-our-app'}>Download App</Link>
          <Link target="_blank" href={'tel:0182763333'} className="flex flex-row gap-1 items-center">
            <PhoneCallIcon className="text-accent size-4" />
            01827 63333
          </Link>
        </div>
      </div>
    </div>
  )
}


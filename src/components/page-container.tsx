import { cn } from "@/lib/utils";
import { RootProps } from "@/types/global-types";

interface PageContainer extends RootProps {
  className?: string
}

export default function PageContainer({ className, children }: PageContainer) {
  return (
    <div className={cn('max-w-7xl mx-auto px-6 2xl:px-0', className)}>{children}</div>
  )
}


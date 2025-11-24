import Link from "next/link";
import { Button } from "../ui/button";
import AnimationBlock from "../animation-block";
import AnimationSection from "../animation-section";

export default function BecomeaDriver() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 2xl:px-0 space-y-8">
        <AnimationBlock className="flex flex-col items-center space-y-2">
          <h2 className="text-4xl font-semibold">Become A Driver</h2>
          <p className="text-muted-foreground lg:w-2/3 text-center">Acorn Taxis are growing everyday. With more and more customers using Acorn as their preferred transport supplier, We are always recruiting new drivers.</p>
        </AnimationBlock>
        <AnimationSection className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
          <div
            style={{
              backgroundImage: `url('/assets/driver.jpg')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="h-[25dvh]"
          >
            <div className="bg-linear-to-l from-primary to-transparent h-full" />
          </div>
          <div className="bg-primary p-8 space-y-8">
            <div className="flex flex-col justify-center items-center text-center h-full space-y-6">
              <h3 className="text-white font-semibold text-2xl lg:w-3/4">
                With full support, We will help you obtain the required licenses to become a taxi Driver in Tamworth
              </h3>
              <div>
                <Button asChild variant="outline" className="bg-secondary hover:bg-secondary/90">
                  <Link href="/become-a-driver">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimationSection>
      </div>
    </section>
  );
}


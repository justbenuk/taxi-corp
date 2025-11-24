import BecomeaDriver from "@/components/sections/become-a-driver";
import HeroSection from "@/components/sections/hero";
import HeroFooter from "@/components/sections/hero-footer";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import AnimationBlock from "@/components/animation-block";

export default function Home() {
  return (
    <AnimationBlock>
      <HeroSection title='Setting the standard for corporate & local travel.' description="The trusted partner for Tamworth businesses and residents for over 50 years" url='/assets/hero.jpg' />
      <HeroFooter />
      <Services />
      <Testimonials showAll={false} />
      <BecomeaDriver />
    </AnimationBlock>
  );
}

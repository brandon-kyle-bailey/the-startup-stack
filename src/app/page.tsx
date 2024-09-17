import FaqSection from "@/app/(components)/faq.component";
import FeaturesSection from "@/app/(components)/features.component";
import FooterSection from "@/app/(components)/footer.component";
import HeroSection from "@/app/(components)/hero.component";
import NavigationSection from "@/app/(components)/navigation.component";
import PricingSection from "@/app/(components)/pricing.component";
import TestimonialSection from "@/app/(components)/testimonial.component";
import UsecaseSection from "@/app/(components)/use-case.component";
import { LANDING_PAGE_LINKS } from "@/lib/constants/routes";

export default function Dashboard() {
  return (
    <main className="flex flex-col py-8 px-8 lg:px-64 gap-16 lg:gap-32">
      <NavigationSection links={LANDING_PAGE_LINKS} />
      <HeroSection />
      <TestimonialSection />
      <UsecaseSection />
      <FeaturesSection />
      <FaqSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}

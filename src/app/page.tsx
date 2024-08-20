import FaqSection from "@/app/(components)/faq.component";
import FeaturesSection from "@/app/(components)/features.component";
import FooterSection from "@/app/(components)/footer.component";
import HeroSection from "@/app/(components)/hero.component";
import NavigationSection from "@/app/(components)/navigation.component";
import PricingSection from "@/app/(components)/pricing.component";
import TestimonialSection from "@/app/(components)/testimonial.component";
import UsecaseSection from "@/app/(components)/use-case.component";

export default function Dashboard() {
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col lg:gap-32">
      <NavigationSection />
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

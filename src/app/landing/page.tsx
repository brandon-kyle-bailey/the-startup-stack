import FaqSection from "@/app/landing/(components)/faq.component";
import FeaturesSection from "@/app/landing/(components)/features.component";
import FooterSection from "@/app/landing/(components)/footer.component";
import HeroSection from "@/app/landing/(components)/hero.component";
import NavigationSection from "@/app/landing/(components)/navigation.component";
import PricingSection from "@/app/landing/(components)/pricing.component";
import TestimonialSection from "@/app/landing/(components)/testimonial.component";
import UsecaseSection from "@/app/landing/(components)/use-case.component";

export default function LandingPage() {
  return (
    <main className="p-8 px-16 min-h-screen flex flex-col gap-32">
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

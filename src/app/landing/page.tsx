import FooterSection from "@/app/landing/(components)/footer.component";
import HeroSection from "@/app/landing/(components)/hero.component";
import NavigationSection from "@/app/landing/(components)/navigation.component";
import TestimonialSection from "@/app/landing/(components)/testimonial.component";

export default function LandingPage() {
  return (
    <main className="p-8 px-16 min-h-screen flex flex-col gap-32">
      <NavigationSection />
      <HeroSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  );
}

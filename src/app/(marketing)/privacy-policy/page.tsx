import FooterSection from "@/app/_components/footer.component";
import NavigationSection from "@/app/_components/navigation.component";
import { LANDING_PAGE_LINKS } from "@/lib/constants/routes";

export default function Page() {
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col lg:gap-32">
      <NavigationSection links={LANDING_PAGE_LINKS} />
      <FooterSection />
    </main>
  );
}

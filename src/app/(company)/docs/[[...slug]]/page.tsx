import FooterSection from "@/app/(components)/footer.component";
import NavigationSection from "@/app/(components)/navigation.component";

export default function page() {
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col lg:gap-32">
      <NavigationSection />
      <FooterSection />
    </main>
  );
}

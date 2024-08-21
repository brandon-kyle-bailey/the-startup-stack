import DocsNavigationComponent from "@/app/(company)/docs/(components)/navigation.component";
import FooterSection from "@/app/(components)/footer.component";

export default function page() {
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col lg:gap-32">
      <DocsNavigationComponent />
      <FooterSection />
    </main>
  );
}

import FooterSection from "@/app/(components)/footer.component";
import NavigationSection from "@/app/(components)/navigation.component";
import { Skeleton } from "@/components/ui/skeleton";
import { LANDING_PAGE_LINKS } from "@/lib/constants/routes";

export default function Loading() {
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col lg:gap-32">
      <NavigationSection links={LANDING_PAGE_LINKS} />
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

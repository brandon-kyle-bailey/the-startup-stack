import FooterSection from "@/app/(components)/footer.component";
import NavigationComponent from "@/app/(components)/navigation.component";
import AsideComponent from "@/components/aside";
import { BLOG_ROUTES } from "@/lib/content/blog/routes";

export default async function Page() {
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col">
      <NavigationComponent links={[]} />
      <div className="w-full flex justify-center lg:gap-64 mt-10 mb-10">
        <AsideComponent prefix="/blog" routes={BLOG_ROUTES} />
        <div className="h-screen overflow-y-auto flex-1"></div>
        <div className="hidden h-screen overflow-y-auto text-start lg:flex"></div>
      </div>
      <FooterSection />
    </main>
  );
}

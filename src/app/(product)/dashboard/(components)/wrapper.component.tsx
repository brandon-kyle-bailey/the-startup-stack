import DashboardAsideComponent from "@/app/(product)/dashboard/(components)/aside.component";
import DashboardHeaderComponent from "@/app/(product)/dashboard/(components)/header.component";
import DashboardMainComponent from "@/app/(product)/dashboard/(components)/main.component";
import { DASHBOARD_PAGE_LINKS } from "@/lib/constants/routes";

export default function DashboardWrapperComponent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardAsideComponent links={DASHBOARD_PAGE_LINKS} />
      <div className="flex flex-col">
        <DashboardHeaderComponent links={DASHBOARD_PAGE_LINKS} />
        <DashboardMainComponent>{children}</DashboardMainComponent>
      </div>
    </div>
  );
}

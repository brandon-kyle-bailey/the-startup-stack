"use client";
import DashboardAsideComponent from "@/app/(product)/dashboard/(components)/aside.component";
import DashboardHeaderComponent from "@/app/(product)/dashboard/(components)/header.component";
import DashboardMainComponent from "@/app/(product)/dashboard/(components)/main.component";
import DynamicBreadcrumbComponent from "@/components/dynamic-breadcrumb.component";
import { DASHBOARD_PAGE_LINKS } from "@/lib/constants/routes";
import { usePathname } from "next/navigation";

export default function DashboardWrapperComponent({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardAsideComponent links={DASHBOARD_PAGE_LINKS} />
      <div className="flex flex-col">
        <DashboardHeaderComponent links={DASHBOARD_PAGE_LINKS} />
        <DashboardMainComponent>
          <DynamicBreadcrumbComponent paths={pathname.split("/")} />
          {children}
        </DashboardMainComponent>
      </div>
    </div>
  );
}

import DashboardAsideComponent from "@/app/(product)/dashboard/(components)/aside.component";
import DashboardHeaderComponent from "@/app/(product)/dashboard/(components)/header.component";
import DashboardMainComponent from "@/app/(product)/dashboard/(components)/main.component";
import { Button } from "@/components/ui/button";
import { DASHBOARD_PAGE_LINKS } from "@/lib/constants/routes";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardAsideComponent links={DASHBOARD_PAGE_LINKS} />
      <div className="flex flex-col">
        <DashboardHeaderComponent links={DASHBOARD_PAGE_LINKS} />
        <DashboardMainComponent>
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You haven&apos;t got anything here.
              </h3>
              <p className="text-sm text-muted-foreground">
                You don&apos;t have any projects set up yet. Let&apos;s get
                started!
              </p>
              <Button className="mt-4">Get started</Button>
            </div>
          </div>
        </DashboardMainComponent>
      </div>
    </div>
  );
}

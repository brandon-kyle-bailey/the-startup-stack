import DashboardWrapperComponent from "@/app/(product)/dashboard/(components)/wrapper.component";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <DashboardWrapperComponent>
      <div className="flex items-center"></div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You haven&apos;t got anything here.
          </h3>
          <p className="text-sm text-muted-foreground">
            You don&apos;t have any projects set up yet. Let&apos;s get started!
          </p>
          <Button className="mt-4">Get started</Button>
        </div>
      </div>
    </DashboardWrapperComponent>
  );
}

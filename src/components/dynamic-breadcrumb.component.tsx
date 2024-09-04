import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function DynamicBreadcrumbComponent({
  paths,
}: {
  paths: string[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex">
        {paths.map((ele, idx) => {
          return (
            <div key={ele} className="flex items-center gap-4">
              <BreadcrumbItem>
                {idx === paths.length - 1 ? (
                  <BreadcrumbPage>{ele}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={paths.slice(0, idx + 1).join("/")}>
                    {ele}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

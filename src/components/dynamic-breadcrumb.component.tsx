import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
export default function DynamicBreadcrumbComponent({
  paths,
}: {
  paths: string[];
}) {
  return (
    <Breadcrumb className="">
      <BreadcrumbList className="">
        <BreadcrumbItem className="text-2xl">
          <BreadcrumbLink href={paths.join("/")}>
            {paths[paths.length - 1][0].toUpperCase() +
              paths[paths.length - 1].slice(1).replaceAll("-", " ")}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

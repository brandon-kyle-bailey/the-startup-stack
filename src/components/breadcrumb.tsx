import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbComponent({ paths }: { paths: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, idx) => {
          return (
            <div key={idx} className="flex gap-2 items-center">
              <BreadcrumbItem>
                <BreadcrumbLink href={path}>{path}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

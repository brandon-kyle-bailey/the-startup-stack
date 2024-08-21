import { getCachedMarkdown } from "@/app/(company)/docs/[[...slug]]/actions";
import FooterSection from "@/app/(components)/footer.component";
import NavigationComponent from "@/app/(components)/navigation.component";
import AsideComponent from "@/components/aside";
import BreadcrumbComponent from "@/components/breadcrumb";
import MarkdownComponent from "@/components/markdown";
import PaginationComponent from "@/components/pagination";
import TableOfContentsComponent from "@/components/table-of-contents";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DOCS_PAGE_ROUTES, DOCS_ROUTES } from "@/lib/content/docs/routes";

type PageProps = {
  params: { slug: string[] };
};

export default async function page({ params: { slug = [] } }: PageProps) {
  slug.unshift("docs");
  if (slug.length < 3) {
    slug = DOCS_PAGE_ROUTES[0].href.split("/");
  }
  const res = await getCachedMarkdown(slug.join("/"));
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col">
      <NavigationComponent links={DOCS_PAGE_ROUTES} />
      <div className="w-full flex justify-center lg:gap-64 mt-10 mb-10">
        <AsideComponent prefix="/docs" routes={DOCS_ROUTES} />
        <div className="h-screen overflow-y-auto flex-1">
          <ScrollArea>
            <BreadcrumbComponent paths={slug} />
            <MarkdownComponent>
              <h1>{res.frontmatter.title}</h1>
              <p className="text-muted-foreground">
                {res.frontmatter.description}
              </p>
              <div>{res.content}</div>
              <PaginationComponent
                routes={DOCS_PAGE_ROUTES}
                current={slug.join("/")}
              />
            </MarkdownComponent>
          </ScrollArea>
        </div>
        <div className="hidden h-screen overflow-y-auto text-start lg:flex">
          <TableOfContentsComponent path={slug.join("/")} />
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  slug.unshift("docs");
  if (slug.length < 3) {
    slug = DOCS_PAGE_ROUTES[0].href.split("/");
  }
  const res = await getCachedMarkdown(slug.join("/"));
  if (!res) return {};
  const { frontmatter } = res;
  return {
    title: `The Startup Stack - ${frontmatter.title}`,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return DOCS_PAGE_ROUTES.map((item) => ({
    slug: item.href.split("/"),
  }));
}

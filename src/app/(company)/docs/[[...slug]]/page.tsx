import { getCachedMarkdown } from "@/app/(company)/docs/[[...slug]]/actions";
import FooterSection from "@/app/(components)/footer.component";
import NavigationComponent from "@/app/(components)/navigation.component";
import BreadcrumbComponent from "@/components/breadcrumb";
import MarkdownComponent from "@/components/markdown";
import PaginationComponent from "@/components/pagination";
import { DOCS_PAGE_ROUTES, DOCS_ROUTES } from "@/lib/content/docs/routes";
import Link from "next/link";

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
      <div className="w-full flex justify-between mt-10 mb-10">
        <div className="hidden md:block pr-8 h-screen overflow-y-auto">
          <ul className="text-muted-foreground flex flex-col gap-2">
            {DOCS_ROUTES.map((ele, idx) => {
              return (
                <li key={idx}>
                  <Link
                    href={`/docs/${ele.href}`}
                    className="hover:text-primary"
                  >
                    {ele.title}
                  </Link>
                  {ele.items.length > 0 && (
                    <ul className="pl-4">
                      {ele.items.map((subele, subeleidx) => {
                        return (
                          <li key={subeleidx}>
                            <Link
                              href={`/docs/${ele.href}/${subele.href}`}
                              className="hover:text-primary"
                            >
                              {subele.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
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
        </div>
        <div className="hidden lg:block">right</div>
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

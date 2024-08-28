import { getCachedMarkdown } from "@/app/(company)/docs/[[...slug]]/actions";
import FooterSection from "@/app/(components)/footer.component";
import NavigationComponent from "@/app/(components)/navigation.component";
import BreadcrumbComponent from "@/components/breadcrumb";
import MarkdownComponent from "@/components/markdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BlogMdxFrontmatter } from "@/lib/markdown";
import Image from "next/image";

type PageProps = {
  params: { slug: string[] };
};

export default async function page({ params: { slug = [] } }: PageProps) {
  slug.unshift("blog");
  const res = await getCachedMarkdown(slug.join("/"));
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col">
      <NavigationComponent links={[]} />
      <div className="w-full flex justify-center mt-10 mb-10">
        <div className="h-screen overflow-y-auto">
          <ScrollArea>
            <BreadcrumbComponent paths={slug} />
            <MarkdownComponent>
              <Image
                alt="cunt"
                width="1920"
                height="1080"
                className="w-full"
                src={(res.frontmatter as BlogMdxFrontmatter).image}
              />
              <h1>{res.frontmatter.title}</h1>
              <p className="text-muted-foreground">
                {res.frontmatter.description}
              </p>
              <p className="text-muted-foreground">
                {(res.frontmatter as BlogMdxFrontmatter).authors}
              </p>
              <p className="text-muted-foreground">
                {(res.frontmatter as BlogMdxFrontmatter).date}
              </p>
              <div>{res.content}</div>
            </MarkdownComponent>
          </ScrollArea>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  slug.unshift("blog");
  const res = await getCachedMarkdown(slug.join("/"));
  if (!res) return {};
  const { frontmatter } = res;
  return {
    title: `The Startup Stack - ${frontmatter.title}`,
    description: frontmatter.description,
  };
}

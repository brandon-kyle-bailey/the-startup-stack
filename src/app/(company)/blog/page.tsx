import FooterSection from "@/app/(components)/footer.component";
import NavigationComponent from "@/app/(components)/navigation.component";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogMdxFrontmatter, getMarkdownForAllBlogPosts } from "@/lib/markdown";
import Image from "next/image";

export default async function Page() {
  const blogPosts = await getMarkdownForAllBlogPosts();
  return (
    <main className="p-8 lg:px-16 min-h-screen flex flex-col">
      <NavigationComponent links={[]} />
      <div className="flex flex-col justify-center align-center mt-10 mb-10 text-muted-foreground">
        <h1 className="text-2xl text-primary">Blog</h1>
        <p>A blog built using mdx and NextJS.</p>
        <ul className="w-1/2 grid-cols-2">
          {blogPosts.map((post) => {
            return (
              <Card key={post!.frontmatter.title} className="w-1/2">
                <CardHeader>
                  <Image
                    src={(post!.frontmatter as BlogMdxFrontmatter).image}
                    alt="cunt"
                    width="1920"
                    height="1080"
                    className="w-full"
                  />
                  <CardTitle>{post!.frontmatter.title}</CardTitle>
                  <CardDescription>
                    {post!.frontmatter.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <p>{(post!.frontmatter as BlogMdxFrontmatter).date}</p>
                  <p>{(post!.frontmatter as BlogMdxFrontmatter).authors}</p>
                </CardFooter>
              </Card>
            );
          })}
        </ul>
      </div>
      <FooterSection />
    </main>
  );
}

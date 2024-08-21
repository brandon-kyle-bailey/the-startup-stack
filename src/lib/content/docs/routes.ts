export const DOCS_ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started/",
    items: [{ title: "Introduction", href: "introduction" }],
  },
];

export const docs_page_routes = DOCS_ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: "docs/" + href + link.href,
    };
  });
}).flat();

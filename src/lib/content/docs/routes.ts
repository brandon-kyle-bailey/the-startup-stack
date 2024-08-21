export const DOCS_ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started/",
    items: [{ title: "Introduction", href: "introduction" }],
  },
];

export const DOCS_PAGE_ROUTES = DOCS_ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: "docs/" + href + link.href,
    };
  });
}).flat();

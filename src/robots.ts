import type { MetadataRoute } from "next";
import { environmentContainer } from "./lib/config/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${environmentContainer.web.host}/sitemap.xml`,
  };
}

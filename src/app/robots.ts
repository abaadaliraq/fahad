import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.fahadalmodares.com/sitemap.xml",
    host: "https://www.fahadalmodares.com",
  };
}
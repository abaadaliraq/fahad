import type { MetadataRoute } from "next";

const siteUrl = "https://www.fahadalmodares.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/journey", "/ventures", "/ventures/darb-al-tabana", "/terms", "/privacy"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/journey" || route === "/ventures" ? 0.85 : route === "/ventures/darb-al-tabana" ? 0.75 : 0.3,
  }));
}
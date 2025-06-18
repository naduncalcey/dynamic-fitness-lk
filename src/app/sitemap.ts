import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dynamicfitness.lk";

  // Define your routes here
  const routes = ["/"];

  // Current date for lastModified
  const date = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap;
}

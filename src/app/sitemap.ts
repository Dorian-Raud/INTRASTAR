import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Génère /sitemap.xml automatiquement au build. Ajouter ici toute nouvelle page.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/qui-sommes-nous`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site.url}/devis`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}

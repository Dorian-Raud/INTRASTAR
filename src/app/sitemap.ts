import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Génère /sitemap.xml automatiquement au build. Ajouter ici toute nouvelle page.
// lastModified : mettre à jour la date à la main quand le contenu d'une page
// change réellement (une date qui bouge à chaque build n'apporte rien à Google).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/devis`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/qui-sommes-nous`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site.url}/faq`,
      lastModified: new Date("2026-10-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/mentions-legales`,
      lastModified: new Date("2026-07-04"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${site.url}/politique-de-confidentialite`,
      lastModified: new Date("2026-07-04"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

// Configuration centrale du site — utilisée pour le SEO (metadata, sitemap,
// robots, données structurées). Modifier BASE_URL ici si le domaine change.
export const site = {
  name: "Intrastar",
  // Domaine canonique (sans www). La version www doit rediriger ici en 301.
  url: "https://intrastar.fr",
  description:
    "Externalisez votre déclaration EMEBI (ex-DEB) et votre état récapitulatif TVA sur les échanges de biens intra-UE. Conseil, établissement et transmission dans les délais légaux.",
  email: "contact@intrastar.fr",
  phone: "+33763727879",
  phoneDisplay: "07 63 72 78 79",
  areaServed: "FR",
  locale: "fr_FR",
} as const;

export type Site = typeof site;

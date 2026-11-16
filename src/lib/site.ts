// Configuration centrale du site — utilisée pour le SEO (metadata, sitemap,
// robots, données structurées). Modifier BASE_URL ici si le domaine change.
export const site = {
  name: "Intrastar",
  legalName: "Intrastar (Raud Dorian, micro-entreprise)",
  // Domaine canonique (sans www). La version www doit rediriger ici en 301.
  url: "https://intrastar.fr",
  description:
    "Externalisez votre déclaration EMEBI (ex-DEB) et votre état récapitulatif TVA : conseil, établissement et dépôt sur le portail des douanes, dans les délais.",
  email: "contact@intrastar.fr",
  phone: "+33763727879",
  phoneDisplay: "07 63 72 78 79",
  address: {
    street: "59 rue de Ponthieu, Bureau 326",
    postalCode: "75008",
    locality: "Paris",
    country: "FR",
  },
  areaServed: "FR",
  // Fondateur (JSON-LD founder). Profil personnel : rattaché à la personne, pas à l'entreprise.
  founder: {
    name: "Dorian Raud",
    jobTitle: "Fondateur, expert en déclaration EMEBI",
    sameAs: ["https://www.linkedin.com/in/dorian-raud-384734374/"],
  },
  // Profils externes de l'entreprise (JSON-LD sameAs).
  sameAs: [
    // Page LinkedIn entreprise (URL publique, pas celle du tableau de bord admin).
    "https://www.linkedin.com/company/135675076/",
    // Fiche Google Business (identifiant CID, stable contrairement aux URL de recherche).
    "https://maps.google.com/?cid=511353669753611695",
  ],
  locale: "fr_FR",
} as const;

export type Site = typeof site;

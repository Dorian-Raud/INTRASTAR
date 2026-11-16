import { site } from "@/lib/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  sub: string;
  // Fil d'Ariane pour Google (JSON-LD BreadcrumbList) : Accueil › name.
  breadcrumb: { name: string; path: string };
};

export default function PageHero({ eyebrow, title, sub, breadcrumb }: PageHeroProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: breadcrumb.name, item: `${site.url}${breadcrumb.path}` },
    ],
  };

  return (
    <section className="a-pagehero">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="a-eyebrow2">{eyebrow}</div>
      <h1 className="a-ph-h1">{title}</h1>
      <p className="a-ph-sub">{sub}</p>
    </section>
  );
}

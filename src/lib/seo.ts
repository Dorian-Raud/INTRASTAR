import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  // Chemin de la page, ex. "/devis". Sert à la canonique et à og:url.
  path: string;
  // Titre complet sans le suffixe "| Intrastar" (utile pour la page d'accueil).
  absoluteTitle?: boolean;
};

// Image générée par src/app/opengraph-image.tsx. À redéclarer dans chaque page,
// sinon l'openGraph de la page écrase celle héritée du layout.
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Intrastar — Déclaration EMEBI (ex-DEB) & état récapitulatif TVA",
};

// Next fusionne les metadata de façon superficielle : un openGraph défini dans
// une page remplace entièrement celui du layout. Chaque page passe donc par ce
// helper pour avoir une canonique, un og:url et des titres sociaux cohérents.
export function pageMetadata({ title, description, path, absoluteTitle }: PageSeo): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
  };
}

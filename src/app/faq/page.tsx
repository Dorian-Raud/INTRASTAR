import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import "./faq.css";

export const metadata: Metadata = pageMetadata({
  title: "FAQ EMEBI & état récapitulatif TVA : délais, sanctions",
  description:
    "Qui doit déposer l'EMEBI ? Quelle différence avec l'état récapitulatif TVA ? Date limite, amende de 750 €, dépôt sur douane.gouv.fr : toutes les réponses sur les déclarations d'échanges intra-UE.",
  path: "/faq",
});

type Faq = {
  q: string;
  // Un paragraphe par entrée. Texte brut : réutilisé tel quel dans le JSON-LD.
  a: string[];
};

const groups: { title: string; items: Faq[] }[] = [
  {
    title: "Comprendre l'EMEBI",
    items: [
      {
        q: "Qu'est-ce que l'EMEBI ?",
        a: [
          "L'EMEBI (Enquête statistique Mensuelle sur les Échanges de Biens Intra-UE) a remplacé la partie statistique de l'ancienne DEB (déclaration d'échanges de biens). Elle recense les mouvements physiques de marchandises entre la France et les autres États membres de l'Union européenne.",
          "La partie fiscale de l'ancienne DEB est devenue l'état récapitulatif TVA, une déclaration distincte.",
        ],
      },
      {
        q: "Qui doit déposer l'EMEBI ?",
        a: [
          "Il n'y a plus de seuil en France. Les entreprises sont choisies par les douanes pour faire partie d'un échantillon : si vous êtes sélectionné, vous devez déposer l'EMEBI chaque mois.",
          "À l'expédition, même si vous n'êtes pas dans l'échantillon, la déclaration fiscale (état récapitulatif TVA) reste obligatoire pour vos livraisons de biens vers des entreprises d'autres États membres.",
        ],
      },
      {
        q: "Quelle différence entre l'EMEBI et l'état récapitulatif TVA ?",
        a: [
          "L'EMEBI est une déclaration statistique : elle décrit le mouvement physique des marchandises. Elle est donc plus complète et plus précise, avec la nomenclature des produits, le poids et parfois les quantités.",
          "L'état récapitulatif TVA est une déclaration fiscale : il suffit du montant hors taxes et du numéro de TVA intracommunautaire de votre client.",
        ],
      },
    ],
  },
  {
    title: "Délais, dépôt et sanctions",
    items: [
      {
        q: "Quelle est la date limite de dépôt ?",
        a: [
          "Les déclarations doivent être déposées au plus tard le 10e jour ouvré du mois qui suit les opérations. Par exemple, les échanges réalisés en mars sont à déclarer avant le 10e jour ouvré d'avril.",
        ],
      },
      {
        q: "Quelle est la sanction en cas de déclaration manquante ?",
        a: [
          "L'amende est de 750 € par déclaration manquante. Quelques mois oubliés peuvent donc vite coûter plus cher qu'une externalisation sur l'année.",
        ],
      },
      {
        q: "Où se fait le dépôt ?",
        a: [
          "Le dépôt se fait en ligne sur le site des douanes, douane.gouv.fr, depuis l'espace professionnel (anciennement Prodouane). Quand vous externalisez, c'est Intrastar qui s'en charge.",
        ],
      },
    ],
  },
  {
    title: "Travailler avec Intrastar",
    items: [
      {
        q: "Comment se passe l'externalisation de ma DEB / EMEBI ?",
        a: [
          "C'est simple : vous nous envoyez vos factures ou vos tableaux, et nous nous occupons du reste — établissement des déclarations EMEBI et de l'état récapitulatif TVA, contrôle et transmission aux douanes dans les délais.",
        ],
      },
      {
        q: "Travaillez-vous en sous-traitance pour les experts-comptables ?",
        a: [
          "Oui, c'est l'essentiel de notre activité. Les cabinets d'expertise comptable nous confient les déclarations d'échanges intra-UE de leurs clients et gardent ainsi leur temps pour leur cœur de métier.",
        ],
      },
      {
        q: "Combien coûte l'externalisation ?",
        a: [
          "Nos tarifs sont établis sur devis, en fonction de vos volumes et de vos besoins. La demande de devis est gratuite et sans engagement.",
        ],
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/faq#faq`,
  inLanguage: "fr-FR",
  mainEntity: groups.flatMap(({ items }) =>
    items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a.join(" ") },
    })),
  ),
};

// Rend "douane.gouv.fr" cliquable dans les réponses.
function renderParagraph(text: string) {
  const [before, after] = text.split("douane.gouv.fr");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <a href="https://www.douane.gouv.fr" target="_blank" rel="noopener noreferrer">
        douane.gouv.fr
      </a>
      {after}
    </>
  );
}

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Questions fréquentes"
        title="EMEBI & état récapitulatif TVA : vos questions"
        sub="Obligations, délais, sanctions et externalisation : l'essentiel pour déclarer vos échanges de biens intra-UE sans erreur."
      />

      <section className="faq-sec">
        <div className="faq-wrap">
          {groups.map(({ title, items }) => (
            <div className="faq-group" key={title}>
              <h2 className="faq-group-h">{title}</h2>
              {items.map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary className="faq-q">
                    <h3 className="faq-q-h">{q}</h3>
                  </summary>
                  <div className="faq-a">
                    {a.map((p) => (
                      <p key={p}>{renderParagraph(p)}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          ))}
          <p className="faq-more">
            Une autre question ? <Link href="/devis">Contactez-nous</Link>, nous vous répondons rapidement.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Déléguez vos déclarations intra-UE"
        sub="Envoyez-nous vos factures, nous nous occupons du reste. Devis gratuit et sans engagement."
        buttonLabel="Demander un devis gratuit"
        href="/devis"
      />
    </>
  );
}

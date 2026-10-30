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
    "Qui doit répondre à l'EMEBI ? Quelle différence avec l'état récapitulatif TVA ? Date limite, sanctions, dépôt sur douane.gouv.fr : les réponses, d'après la notice officielle des douanes.",
  path: "/faq",
});

type Faq = {
  q: string;
  // Un paragraphe par entrée. Texte brut : réutilisé tel quel dans le JSON-LD.
  a: string[];
};

// Réponses établies d'après la notice EMEBI des douanes (version du 19 décembre 2025).
const groups: { title: string; items: Faq[] }[] = [
  {
    title: "Comprendre l'EMEBI",
    items: [
      {
        q: "Qu'est-ce que l'EMEBI ?",
        a: [
          "L'EMEBI est l'enquête statistique mensuelle sur les échanges de biens intra-Union européenne. Depuis janvier 2022, elle remplace le volet statistique de l'ancienne DEB (déclaration d'échanges de biens) et recense les mouvements physiques de marchandises entre la France et les autres États membres.",
          "Le volet fiscal de l'ancienne DEB est devenu l'état récapitulatif TVA, une déclaration distincte.",
        ],
      },
      {
        q: "Qui doit répondre à l'EMEBI ?",
        a: [
          "Il n'y a plus de seuil en France. Chaque année, les douanes définissent un échantillon d'entreprises : seules celles qui en font partie et qui ont reçu une lettre-avis par courrier doivent répondre à l'EMEBI, chaque mois.",
          "À l'expédition, même si vous n'êtes pas dans l'échantillon, l'état récapitulatif TVA reste obligatoire pour vos livraisons de biens vers des entreprises d'autres États membres. Il se dépose spontanément, sans courrier préalable des douanes.",
        ],
      },
      {
        q: "Quelle différence entre l'EMEBI et l'état récapitulatif TVA ?",
        a: [
          "L'EMEBI est une enquête statistique : elle décrit le mouvement physique des marchandises. Elle est donc plus complète et plus précise, avec notamment la nomenclature des produits, le poids et parfois les quantités.",
          "L'état récapitulatif TVA est une déclaration fiscale, transmise aux impôts pour le contrôle de la TVA intra-UE : il suffit du montant hors taxes, du régime et du numéro de TVA intracommunautaire de votre client.",
        ],
      },
      {
        q: "Je n'ai eu aucun échange ce mois-ci : dois-je quand même répondre ?",
        a: [
          "Oui. Si vous faites partie de l'échantillon, la réponse à l'EMEBI est obligatoire même sans aucun flux sur le mois : il faut alors déclarer un « mois sans réponse statistique » dans le service en ligne.",
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
          "La réponse doit être déposée entre le 1er et le 10e jour ouvrable du mois qui suit le mois de référence (les jours ouvrables vont du lundi au samedi, hors jours fériés). Elle ne peut pas être déposée avant le 1er du mois. Par exemple, pour mars 2026, la date limite était le 13 avril 2026.",
          "Retrouvez toutes les dates dans notre calendrier EMEBI.",
        ],
      },
      {
        q: "Quelles sanctions en cas de retard ou d'oubli ?",
        a: [
          "Après des rappels puis une mise en demeure restés sans réponse, une amende administrative de 75 à 150 € peut être appliquée pour chaque mois non déclaré. Elle peut atteindre 2 250 € en cas de récidive, c'est-à-dire si l'entreprise a déjà été sanctionnée pour une enquête statistique obligatoire au cours des 3 années précédentes. Une omission ou une inexactitude peut aussi être sanctionnée.",
        ],
      },
      {
        q: "Où se fait le dépôt ?",
        a: [
          "Le dépôt se fait en ligne sur douane.gouv.fr, dans le service « Échanges intra-UE de biens » (DEBWEB2), avec le compte de l'entreprise sur le portail des douanes (anciennement Prodouane). Quand vous externalisez, c'est Intrastar qui s'en charge.",
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
          "C'est simple : vous nous envoyez vos factures ou vos tableaux, et nous nous occupons du reste — établissement de la réponse à l'EMEBI et de l'état récapitulatif TVA, contrôle et transmission aux douanes dans les délais.",
        ],
      },
      {
        q: "Ai-je le droit de déléguer mes déclarations ?",
        a: [
          "Oui. La notice des douanes prévoit que l'entreprise peut confier sa réponse à un prestataire, appelé « tiers déclarant », à condition de le mandater expressément. Votre entreprise reste identifiée sur chaque déclaration et conserve sa responsabilité légale : c'est pourquoi nous contrôlons chaque déclaration avant transmission.",
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

// Liens insérés dans les réponses : le texte reste brut pour le JSON-LD.
const links: { text: string; href: string }[] = [
  { text: "douane.gouv.fr", href: "https://www.douane.gouv.fr/service-en-ligne/echanges-intra-ue-de-biens-debweb2-ex-deb" },
  { text: "calendrier EMEBI", href: "/calendrier-emebi" },
];

function renderParagraph(text: string) {
  const link = links.find((l) => text.includes(l.text));
  if (!link) return text;
  const [before, after] = text.split(link.text);
  const external = link.href.startsWith("http");
  return (
    <>
      {before}
      {external ? (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      ) : (
        <Link href={link.href}>{link.text}</Link>
      )}
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

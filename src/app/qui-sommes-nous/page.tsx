import { Users, ShieldCheck, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import CtaBand from "@/components/CtaBand";
import "./qui-sommes-nous.css";

const values = [
  {
    icon: Users,
    title: "Proximité",
    text: "Un interlocuteur unique, disponible et qui connaît votre dossier. Pas de standard, pas de jargon inutile.",
  },
  {
    icon: ShieldCheck,
    title: "Rigueur",
    text: "Chaque déclaration est contrôlée et transmise dans les délais légaux. La conformité n'est pas négociable.",
  },
  {
    icon: Zap,
    title: "Réactivité",
    text: "Un traitement rapide et des réponses claires à vos questions, pour ne jamais vous laisser dans l'attente.",
  },
];

export default function QuiSommesNous() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="L'expertise des échanges intra-UE, à taille humaine."
        sub="Intrastar est dédié à la déclaration EMEBI et aux obligations fiscales associées, pensée pour les entreprises qui veulent déléguer en confiance."
      />

      <section className="about-page">
        <div className="about-top">
          <div className="about-text">
            <h2>Notre histoire</h2>
            <p>
              Après plus de cinq années passées au cœur des déclarations
              d'échanges de biens, au service d'entreprises industrielles
              et de cabinets comptables, le constat était simple :
              l'EMEBI reste une obligation chronophage et mal maîtrisée,
              source d'erreurs et de stress chaque mois.
            </p>
            <p>
              Nous avons créé cette structure pour en faire l'inverse :
              une démarche fluide, fiable et déléguée, où vous gardez
              la visibilité sans la charge. Un seul interlocuteur,
              qui connaît vos flux et anticipe les échéances.
            </p>
          </div>
          <div className="about-image">
            <img
              className="portrait-about"
              src="/DSCF0074.jpg"
              alt="Photo du fondateur"
            />
          </div>
        </div>
        <div className="about-mission">
          <h2>Notre mission</h2>
          <p>
            Vous garantir une conformité totale sur vos déclarations EMEBI —
            Introduction et Expédition — ainsi que votre état récapitulatif TVA,
            avec des délais courts et une relation de proximité.
          </p>
          <p>
            Notre objectif est simple : vous permettre de vous concentrer sur
            votre activité pendant que nous assurons la conformité de vos
            obligations déclaratives.
          </p>
        </div>
      </section>

      <section className="a-sec" style={{ paddingTop: 0 }}>
        <div className="a-sechead">
          <div className="a-eyebrow2">Nos valeurs</div>
          <h2 className="a-h2">Ce qui guide notre travail</h2>
        </div>
        <div className="a-values">
          {values.map(({ icon: Icon, title, text }) => (
            <div className="a-value" key={title}>
              <div className="a-cardicon">
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="a-value-h">{title}</h3>
              <p className="a-value-t">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsSection
        stats={[
          { num: "+5 ans", label: "d'expertise dédiée aux échanges de biens intra-UE" },
          { num: "PME · ETI", label: "cabinets comptables et services logistiques accompagnés" },
          { num: "France", label: "intervention à distance, sur tout le territoire" },
        ]}
      />

      <CtaBand
        heading="Discutons de vos flux"
        sub="Une question, un besoin ponctuel ou une externalisation complète ? Parlons-en."
        buttonLabel="Demander un devis gratuit"
        href="/devis"
      />
    </>
  );
}

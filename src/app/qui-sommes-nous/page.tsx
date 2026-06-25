import { Users, ShieldCheck, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import StatsSection from "@/components/StatsSection";
import CtaBand from "@/components/CtaBand";

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

      <section className="a-sec">
        <div className="a-split">
          <div>
            <h2 className="a-prose-h">Notre histoire</h2>
            <p className="a-prose">
              Après plus de cinq années passées au cœur des déclarations d&apos;échanges de biens, au
              service d&apos;entreprises industrielles et de cabinets, le constat était simple :
              l&apos;EMEBI reste une obligation chronophage et mal maîtrisée, source d&apos;erreurs et
              de stress chaque mois.
            </p>
            <p className="a-prose">
              Nous avons créé cette structure pour en faire l&apos;inverse : une démarche fluide,
              fiable et déléguée, où vous gardez la visibilité sans la charge. Un seul interlocuteur,
              qui connaît vos flux et anticipe les échéances.
            </p>
            <h2 className="a-prose-h" style={{ marginTop: 34 }}>
              Notre mission
            </h2>
            <p className="a-prose">
              Vous garantir une conformité totale sur vos déclarations EMEBI — Introduction et
              Expédition — et votre état récapitulatif TVA, avec des délais courts et une relation de
              proximité. Pour que la réglementation intra-UE ne soit plus jamais un frein à votre
              activité.
            </p>
          </div>
          <Placeholder label="photo — portrait fondateur (3:4)" className="a-portrait" />
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

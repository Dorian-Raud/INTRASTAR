import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import StatsSection from "@/components/StatsSection";
import CtaBand from "@/components/CtaBand";

const flows = [
  {
    letter: "I",
    name: "Flux à l'Introduction",
    desc: "Vos achats et acquisitions de biens en provenance des autres États membres.",
  },
  {
    letter: "E",
    name: "Flux à l'Expédition",
    desc: "Vos ventes et livraisons de biens vers les autres États membres.",
  },
  {
    letter: "T",
    name: "État récapitulatif TVA",
    desc: "Vos obligations fiscales sur les échanges intra-UE, traitées en parallèle.",
  },
];

const services = [
  {
    num: "01",
    title: "Conseil & accompagnement",
    text: "Audit de vos flux intra-UE, choix du régime adapté, mise en conformité et réponses à vos questions douanières.",
  },
  {
    num: "02",
    title: "Déclaration EMEBI",
    text: "Établissement et transmission mensuelle de vos flux à l'Introduction et à l'Expédition, dans le respect des délais.",
  },
  {
    num: "03",
    title: "État récapitulatif TVA",
    text: "Réponse à vos obligations fiscales sur les échanges de biens intra-UE, en cohérence avec votre EMEBI.",
  },
];

export default function Home() {
  return (
    <>
      <section className="a-hero">
        <div>
          <div className="a-eyebrow">EMEBI · État récapitulatif TVA</div>
          <h1 className="a-h1">Vos déclarations d&apos;échanges intra-UE, gérées de A à Z.</h1>
          <p className="a-lead">
            Conseil, établissement et transmission de votre EMEBI — à l&apos;Introduction comme à
            l&apos;Expédition — et de votre état récapitulatif TVA. En toute conformité, sans y passer
            vos journées.
          </p>
          <div className="a-herobtns">
            <Link href="/devis" className="a-btn">
              Demander un devis gratuit
            </Link>
            <Link href="/qui-sommes-nous" className="a-ghost">
              Qui sommes-nous
            </Link>
          </div>
        </div>
        <img src="/office.png" alt="photo — équipe / bureau (4:3)" className="a-hero-img" />
      </section>

      <section className="a-band">
        <div className="a-band-grid">
          <div>
            <div className="a-band-tag">Notre domaine d&apos;expertise</div>
            <h2 className="a-band-title">L&apos;EMEBI, anciennement DEB, sans le casse-tête.</h2>
            <p className="a-band-text">
              Depuis janvier 2022, les modalités de déclaration des échanges de biens à l’introduction et à l’expédition au sein de l’Union européenne ont évolué. 
              L’enquête mensuelle sur les échanges de biens intra-Union Européenne (EMEBI) a remplacé le volet statistique de la déclaration d’échanges de biens (DEB) pour les échanges intra-UE de marchandises. 
              Nous prenons en charge l&apos;intégralité
              de la démarche pour que vous restiez concentré sur votre activité.
            </p>
          </div>
          <div className="a-flow">
            {flows.map((flow) => (
              <div className="a-flowcard" key={flow.letter}>
                <div className="a-flowdot">{flow.letter}</div>
                <div>
                  <p className="a-flowname">{flow.name}</p>
                  <p className="a-flowdesc">{flow.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="a-sec">
        <div className="a-sechead">
          <div className="a-eyebrow2">Nos prestations</div>
          <h2 className="a-h2">Trois services pour une conformité totale</h2>
          <p className="a-secsub">
            Du conseil ponctuel à l&apos;externalisation complète de vos déclarations, nous nous
            adaptons à vos volumes et à votre organisation.
          </p>
        </div>
        <div className="a-cards">
          {services.map((service) => (
            <div className="a-card" key={service.num}>
              <div className="a-cardicon">{service.num}</div>
              <h3 className="a-cardtitle">{service.title}</h3>
              <p className="a-cardtext">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsSection
        stats={[
          { num: "+5 ans", label: "d'expertise en déclarations d'échanges intra-UE" },
          { num: "48 h", label: "délai moyen de traitement de vos déclarations" },
          { num: "100 %", label: "de déclarations transmises dans les délais légaux" },
        ]}
      />

      <section className="a-about">
        <Placeholder label="photo — portrait (3:4)" className="a-about-img" />
        <div>
          <div className="a-eyebrow2">Qui sommes-nous</div>
          <h2 className="a-h2">Un interlocuteur unique, expert et réactif</h2>
          <p className="a-secsub">
            Forte de plus de cinq années d&apos;expérience dans la déclaration des échanges de biens,
            notre micro-entreprise accompagne PME, services logistiques et cabinets comptables. Notre
            promesse : un suivi personnalisé, des délais courts et une conformité sans faille — à un
            tarif clair et maîtrisé.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link href="/qui-sommes-nous" className="a-ghost">
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Prêt à déléguer vos déclarations ?"
        sub="Recevez une estimation claire sous 48 heures, sans engagement."
        buttonLabel="Demander un devis gratuit"
        href="/devis"
      />
    </>
  );
}

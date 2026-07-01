import PageHero from "@/components/PageHero";
import DevisForm from "@/components/DevisForm";

const steps = [
  {
    n: "1",
    title: "Vous décrivez vos flux",
    text: "Type de déclaration, volumes, secteur d'activité et échéances via le formulaire.",
  },
  {
    n: "2",
    title: "Nous étudions votre besoin",
    text: "Analyse de votre situation et proposition d'une formule adaptée.",
  },
  {
    n: "3",
    title: "Vous recevez votre devis",
    text: "Une estimation claire sous 48 heures, sans engagement de votre part.",
  },
];

export default function Devis() {
  return (
    <>
      <PageHero
        eyebrow="Demande de devis"
        title="Recevez une estimation sous 48 heures."
        sub="Décrivez-nous vos flux intra-UE : nous revenons vers vous avec une proposition adaptée et sans engagement."
      />

      <section className="a-devis">
        <div>
          <div className="a-steps">
            {steps.map((step) => (
              <div className="a-step" key={step.n}>
                <div className="a-step-n">{step.n}</div>
                <div>
                  <p className="a-step-h">{step.title}</p>
                  <p className="a-step-t">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="a-contactcard">
            <p className="a-cc-h">Préférez un échange direct ?</p>
            <div className="a-cc-row">
              <div className="a-cc-ic" >✉</div >
              <a href="mailto:contact@intrastar.fr">contact@intrastar.fr</a>
            </div>
            <div className="a-cc-row">
              <div className="a-cc-ic">☎</div>
              <a href="tel:0763727879">07 63 72 78 79</a>
            </div>
            <div className="a-cc-row">
              <div className="a-cc-ic">⌖</div>
              France entière · à distance
            </div>
          </div>
        </div>

        <DevisForm />
      </section>
    </>
  );
}

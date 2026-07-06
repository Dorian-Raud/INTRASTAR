import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import "../legal.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Intrastar",
  description: "Comment Intrastar traite vos données personnelles : collecte, finalités, conservation, cookies et vos droits RGPD.",
};

export default function Confidentialite() {
  return (
    <>
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        sub="Cette page explique quelles données sont collectées sur ce site, pourquoi, et comment exercer vos droits, conformément au RGPD."
      />

      <section className="legal-sec">
        <div className="legal-wrap">
          <p className="legal-updated">Dernière mise à jour : 4 juillet 2026</p>

          <div className="legal-block">
            <h2 className="legal-h2">1. Responsable du traitement</h2>
            <p className="legal-p">
              Le responsable du traitement des données est Intrastar dont son représentant légal est Raud Dorian, micro-entreprise dont le
              siège social est situé 59, rue de Ponthieu, Bureau 326, 75008 Paris. Pour toute
              question relative à vos données, contactez{" "}
              <a href="mailto:contact@intrastar.fr">contact@intrastar.fr</a>.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">2. Données collectées et formulaire de contact</h2>
            <p className="legal-p">
              Le formulaire de demande de devis vous invite à renseigner votre nom, votre
              entreprise, votre email, votre téléphone et une description de votre besoin. Ces
              informations ne sont ni envoyées à un serveur, ni stockées par le site : le
              formulaire prépare uniquement un email pré-rempli, ouvert dans votre propre logiciel
              de messagerie. Vos données ne nous parviennent donc que si vous choisissez ensuite
              d&apos;envoyer vous-même cet email à contact@intrastar.fr.
            </p>
            <p className="legal-p">
              En dehors de ce formulaire, ce site ne collecte aucune donnée personnelle à votre
              insu et ne dispose d&apos;aucun compte utilisateur ni base de données de visiteurs.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">3. Finalité et base légale du traitement</h2>
            <p className="legal-p">
              Les données transmises par email via le formulaire sont utilisées uniquement pour
              répondre à votre demande de devis ou de contact. Le traitement repose sur votre
              consentement (case à cocher du formulaire) et sur l&apos;intérêt légitime
              d&apos;Intrastar à répondre aux demandes qui lui sont adressées.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">4. Durée de conservation</h2>
            <p className="legal-p">
              Les emails reçus sont conservés le temps nécessaire au traitement de votre demande,
              puis pendant une durée maximale de 3 ans à compter du dernier contact, sauf
              obligation légale de conservation plus longue (notamment comptable).
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">5. Destinataires des données</h2>
            <p className="legal-p">
              Seule Intrastar a accès aux données transmises par email. Aucune donnée
              n&apos;est vendue, louée ou transmise à des tiers à des fins commerciales.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">6. Cookies et traceurs</h2>
            <p className="legal-p">
              Ce site ne dépose aucun cookie de mesure d&apos;audience, publicitaire ou traceur
              tiers, et n&apos;utilise aucun outil d&apos;analytics.
            </p>
            <ul className="legal-list">
              <li>
                Polices d&apos;écriture : la police Hanken Grotesk (Google Fonts) est intégrée et
                hébergée directement par le site au moment de sa construction. Aucune requête
                n&apos;est envoyée aux serveurs Google lors de votre navigation, aucune donnée
                n&apos;est partagée avec Google et aucun cookie n&apos;est déposé à ce titre.
              </li>
              <li>
                Hébergement : le site est hébergé par Vercel Inc., qui peut traiter des données
                techniques strictement nécessaires au fonctionnement de son infrastructure
                (adresse IP, journaux de connexion), sans dépôt de cookie de suivi à des fins
                d&apos;analyse ou de publicité.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">7. Vos droits</h2>
            <p className="legal-p">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement, de limitation, d&apos;opposition et de
              portabilité sur vos données personnelles. Vous pouvez exercer ces droits en nous
              écrivant à{" "}
              <a href="mailto:contact@intrastar.fr">contact@intrastar.fr</a>. Vous disposez
              également du droit d&apos;introduire une réclamation auprès de la CNIL
              (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">8. Sécurité</h2>
            <p className="legal-p">
              Des mesures raisonnables sont mises en œuvre pour protéger les données transmises,
              notamment via le chiffrement HTTPS de l&apos;ensemble des pages du site.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">9. Modification de cette politique</h2>
            <p className="legal-p">
              Cette politique de confidentialité peut être mise à jour à tout moment, notamment
              pour se conformer à toute évolution réglementaire, technique ou jurisprudentielle.
              La date de dernière mise à jour figure en haut de cette page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import "../legal.css";

export const metadata: Metadata = {
  title: "Mentions légales — Intrastar",
  description: "Mentions légales du site Intrastar : éditeur, hébergement, propriété intellectuelle et droit applicable.",
};

export default function MentionsLegales() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        sub="Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, voici les informations légales relatives à l'édition et à l'hébergement de ce site."
      />

      <section className="legal-sec">
        <div className="legal-wrap">
          <p className="legal-updated">Dernière mise à jour : 4 juillet 2026</p>

          <div className="legal-note">
            <strong>Immatriculation en cours.</strong> Intrastar est en cours
            d&apos;immatriculation auprès de l&apos;INSEE. Le numéro SIREN/SIRET et le régime de
            TVA applicable seront ajoutés à cette page dès leur attribution.
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">1. Éditeur du site</h2>
            <p className="legal-p">
              Le présent site est édité par <strong>Intrastar</strong>, micro-entreprise
              (entreprise individuelle) en cours d&apos;immatriculation au Registre National des
              Entreprises.
            </p>
            <ul className="legal-list">
              <li>Nom commercial : Intrastar</li>
              <li>Représentée par : Raud Dorian</li>
              <li>Siège social : 59, rue de Ponthieu, Bureau 326, 75008 Paris, France</li>
              <li>SIREN / SIRET : en cours d&apos;attribution</li>
              <li>Régime de TVA : en cours de définition</li>
              <li>
                Email :{" "}
                <a href="mailto:contact@intrastar.fr">contact@intrastar.fr</a>
              </li>
              <li>
                Téléphone : <a href="tel:0763727879">07 63 72 78 79</a>
              </li>
              <li>Directeur de la publication : le représentant légal d&apos;Intrastar</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">2. Hébergement</h2>
            <p className="legal-p">
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
              États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">3. Propriété intellectuelle</h2>
            <p className="legal-p">
              L&apos;ensemble des contenus présents sur ce site (textes, logo, mise en page,
              graphismes) est la propriété exclusive d&apos;Intrastar, sauf mention contraire.
              Toute reproduction, représentation, modification ou adaptation, totale ou
              partielle, sans autorisation écrite préalable, est interdite et pourrait constituer
              une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">4. Limitation de responsabilité</h2>
            <p className="legal-p">
              Intrastar s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées
              sur ce site, mais ne saurait être tenue responsable des omissions, inexactitudes ou
              carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers
              partenaires qui lui fournissent ces informations.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">5. Droit applicable</h2>
            <p className="legal-p">
              Le présent site et les présentes mentions légales sont soumis au droit français. En
              cas de litige, et à défaut de résolution amiable, les tribunaux français seront
              seuls compétents.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="legal-h2">6. Contact</h2>
            <p className="legal-p">
              Pour toute question relative au site, vous pouvez nous contacter à l&apos;adresse{" "}
              <a href="mailto:contact@intrastar.fr">contact@intrastar.fr</a> ou par téléphone au{" "}
              <a href="tel:0763727879">07 63 72 78 79</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

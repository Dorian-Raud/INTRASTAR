import Link from "next/link";

export default function Footer() {
  return (
    <footer className="a-foot">
      <div className="a-foot-top">
        <div>
          <div className="a-foot-brand">
            <img className="a-brandname" src="/logo_long_intrastar.png" alt="logo-intrastar" />
          </div>
          <p style={{ margin: 0, maxWidth: "24em" }}>
            Micro-entreprise spécialisée dans la déclaration EMEBI et les obligations fiscales liées
            aux échanges de biens intra-UE.
          </p>
        </div>
        <div>
          <p className="a-foot-h">Navigation</p>
          <Link href="/" className="a-foot-link">
            Accueil
          </Link>
          <Link href="/qui-sommes-nous" className="a-foot-link">
            Qui sommes-nous
          </Link>
          <Link href="/devis" className="a-foot-link">
            Demander un devis
          </Link>
        </div>
        <div>
          <p className="a-foot-h">Contact</p>
          <a className="a-foot-link" href="mailto:intrastar.contact@gmail.com">
            intrastar.contact@gmail.com
          </a>
          <a className="a-foot-link" href="tel:0763727879">
            07 63 72 78 79
          </a>
          <span className="a-foot-link">France entière · à distance</span>
        </div>
      </div>
      <div className="a-foot-bottom">
        <span>© 2026 Votre Marque · SIREN 000 000 000</span>
        <span>Mentions légales · Confidentialité</span>
      </div>
    </footer>
  );
}

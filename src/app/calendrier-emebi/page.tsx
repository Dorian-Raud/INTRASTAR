import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import "./calendrier.css";

export const metadata: Metadata = pageMetadata({
  title: "Calendrier EMEBI 2027 : dates limites de dépôt",
  description:
    "Toutes les dates limites de dépôt de l'EMEBI en 2027 et 2026, mois par mois : le 10e jour ouvrable du mois suivant, hors jours fériés, d'après la notice officielle des douanes.",
  path: "/calendrier-emebi",
});

type Deadline = {
  // Mois de référence (opérations), au format AAAA-MM.
  month: string;
  // Date limite de dépôt, au format AAAA-MM-JJ.
  due: string;
};

// 2027 : calculé avec la règle de la notice (10e jour ouvrable, du lundi au
// samedi, hors jours fériés), qui retrouve exactement les dates 2026. À
// remplacer par le calendrier officiel dès sa publication par les douanes.
const calendar2027: Deadline[] = [
  { month: "2027-01", due: "2027-02-11" },
  { month: "2027-02", due: "2027-03-11" },
  { month: "2027-03", due: "2027-04-12" },
  { month: "2027-04", due: "2027-05-15" },
  { month: "2027-05", due: "2027-06-11" },
  { month: "2027-06", due: "2027-07-12" },
  { month: "2027-07", due: "2027-08-12" },
  { month: "2027-08", due: "2027-09-11" },
  { month: "2027-09", due: "2027-10-12" },
  { month: "2027-10", due: "2027-11-13" },
  { month: "2027-11", due: "2027-12-11" },
  { month: "2027-12", due: "2028-01-13" },
];

// 2026 : dates officielles de la notice EMEBI des douanes (version du 19 décembre 2025).
const calendar2026: Deadline[] = [
  { month: "2026-01", due: "2026-02-12" },
  { month: "2026-02", due: "2026-03-12" },
  { month: "2026-03", due: "2026-04-13" },
  { month: "2026-04", due: "2026-05-15" },
  { month: "2026-05", due: "2026-06-11" },
  { month: "2026-06", due: "2026-07-11" },
  { month: "2026-07", due: "2026-08-12" },
  { month: "2026-08", due: "2026-09-11" },
  { month: "2026-09", due: "2026-10-12" },
  { month: "2026-10", due: "2026-11-13" },
  { month: "2026-11", due: "2026-12-11" },
  { month: "2026-12", due: "2027-01-13" },
];

const monthFmt = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" });
const dueFmt = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatMonth(month: string) {
  const label = monthFmt.format(new Date(`${month}-01T00:00:00Z`));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function CalendarTable({ rows, caption }: { rows: Deadline[]; caption: string }) {
  return (
    <div className="cal-table-wrap">
      <table className="cal-table">
        <caption className="cal-caption">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Mois de référence</th>
            <th scope="col">Date limite de dépôt</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ month, due }) => (
            <tr key={month}>
              <th scope="row">{formatMonth(month)}</th>
              <td>
                <time dateTime={due}>{dueFmt.format(new Date(`${due}T00:00:00Z`))}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CalendrierEmebi() {
  return (
    <>
      <PageHero
        eyebrow="Calendrier EMEBI"
        title="Calendrier EMEBI 2027 : les dates limites de dépôt"
        sub="Mois par mois, les dates limites pour déposer votre réponse à l'EMEBI sur douane.gouv.fr."
      />

      <section className="cal-sec">
        <div className="cal-wrap">
          <div className="cal-rule">
            <h2 className="cal-h2">La règle : le 10e jour ouvrable du mois suivant</h2>
            <p className="cal-p">
              La réponse à l&apos;EMEBI se dépose <strong>entre le 1er et le 10e jour ouvrable</strong> du mois qui suit
              le mois de référence. Les jours ouvrables vont du lundi au samedi, hors jours fériés : la date limite
              change donc chaque mois. Le dépôt n&apos;est pas possible avant le 1er du mois.
            </p>
            <p className="cal-p">
              Si vous faites partie de l&apos;échantillon, une réponse est due <strong>même sans aucun échange</strong>{" "}
              sur le mois : il faut alors déclarer un « mois sans réponse statistique ».
            </p>
          </div>

          <h2 className="cal-h2">Calendrier EMEBI 2027</h2>
          <p className="cal-note">
            Dates calculées selon la règle de la notice officielle des douanes. Le calendrier officiel 2027 sera publié
            par les douanes en fin d&apos;année : nous mettrons cette page à jour si une date diffère.
          </p>
          <CalendarTable rows={calendar2027} caption="Dates limites de dépôt de l'EMEBI en 2027" />

          <h2 className="cal-h2">Calendrier EMEBI 2026</h2>
          <p className="cal-note">Dates officielles de la notice EMEBI des douanes (version du 19 décembre 2025).</p>
          <CalendarTable rows={calendar2026} caption="Dates limites de dépôt de l'EMEBI en 2026" />

          <div className="cal-rule">
            <h2 className="cal-h2">Bon à savoir</h2>
            <p className="cal-p">
              Seule la date d&apos;<strong>enregistrement définitif</strong> de la réponse compte : une déclaration
              simplement stockée dans le service en ligne n&apos;est pas considérée comme déposée.
            </p>
            <p className="cal-p">
              Plusieurs dates limites tombent un samedi : anticipez votre dépôt pour éviter un oubli en fin de
              semaine. En cas de retard, des sanctions sont prévues — elles sont détaillées dans notre{" "}
              <Link href="/faq">FAQ EMEBI</Link>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ne surveillez plus le calendrier"
        sub="Confiez-nous vos déclarations EMEBI et votre état récapitulatif TVA : nous les transmettons dans les délais, chaque mois."
        buttonLabel="Demander un devis gratuit"
        href="/devis"
      />
    </>
  );
}

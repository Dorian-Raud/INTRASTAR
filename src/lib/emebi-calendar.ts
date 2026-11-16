// Dates limites de dépôt de l'EMEBI, partagées par la page calendrier et la FAQ.

export type Deadline = {
  // Mois de référence (opérations), au format AAAA-MM.
  month: string;
  // Date limite de dépôt, au format AAAA-MM-JJ.
  due: string;
};

// 2027 : calculé avec la règle de la notice (10e jour ouvrable, du lundi au
// samedi, hors jours fériés), qui retrouve exactement les dates 2026. À
// remplacer par le calendrier officiel dès sa publication par les douanes.
export const calendar2027: Deadline[] = [
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
export const calendar2026: Deadline[] = [
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
const dueShortFmt = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// « Mars 2026 »
export function formatMonth(month: string) {
  const label = monthFmt.format(new Date(`${month}-01T00:00:00Z`));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

// « lundi 13 avril 2026 »
export function formatDue(due: string) {
  return dueFmt.format(new Date(`${due}T00:00:00Z`));
}

// « 13 avril 2026 »
export function formatDueShort(due: string) {
  return dueShortFmt.format(new Date(`${due}T00:00:00Z`));
}

// Prochaine date limite à venir (aujourd'hui inclus), ou null si le calendrier est épuisé.
export function nextDeadline(now: Date = new Date()): Deadline | null {
  const today = now.toISOString().slice(0, 10);
  return [...calendar2026, ...calendar2027].find(({ due }) => due >= today) ?? null;
}

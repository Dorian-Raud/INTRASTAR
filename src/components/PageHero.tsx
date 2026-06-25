type PageHeroProps = {
  eyebrow: string;
  title: string;
  sub: string;
};

export default function PageHero({ eyebrow, title, sub }: PageHeroProps) {
  return (
    <section className="a-pagehero">
      <div className="a-eyebrow2">{eyebrow}</div>
      <h1 className="a-ph-h1">{title}</h1>
      <p className="a-ph-sub">{sub}</p>
    </section>
  );
}

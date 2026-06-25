type Stat = {
  num: string;
  label: string;
};

export default function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="a-stats">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="a-stat-num">{stat.num}</div>
          <div className="a-stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

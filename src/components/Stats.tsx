const stats = [
  { value: "9+", label: "Years of hands-on DevOps and cloud experience" },
  { value: "5", label: "Engineers led as technical lead (Onov8)" },
  { value: "~40%", label: "Reduction in operating expenses for an analytics aggregation platform" },
  { value: "Dubai", label: "Based in Dubai, UAE. Open to remote work." },
];

const Stats = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand-muted bg-clip-text text-transparent">
          At a glance
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-accent mx-auto mb-16"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.value} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-border flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-brand-muted leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;

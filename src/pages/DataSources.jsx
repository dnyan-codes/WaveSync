export default function DataSources() {
  const sources = [
    { title: 'Satellite Imagery', desc: 'Detects oil spills, ghost nets, illegal dumping, coral bleaching, and marine pollution.' },
    { title: 'Underwater Drones', desc: 'Investigates underwater evidence.' },
    { title: 'Sonar Systems', desc: 'Analyzes underwater structures.' },
    { title: 'IoT Water Sensors', desc: 'Monitors water quality continuously.' },
    { title: 'Ocean Buoys', desc: 'Provides wave, tide and marine conditions.' },
    { title: 'Weather Data', desc: 'Predicts storms and environmental risks.' },
  ];
  return (
    <div className="min-h-screen py-12 bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Data Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sources.map((s) => (
            <div key={s.title} className="panel p-4">
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

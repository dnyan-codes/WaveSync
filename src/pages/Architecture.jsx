import { motion } from 'framer-motion';

const STAGES = [
  {
    id: 1,
    title: 'Data Sources',
    status: 'SIMULATED DATA',
    items: ['Satellite imagery', 'Drones', 'Sonar', 'IoT', 'Ocean buoys', 'Weather'],
  },
  {
    id: 2,
    title: 'Data Ingestion',
    status: 'SIMULATED',
    items: ['Data fusion', 'Image processing', 'Sensor processing', 'Geo mapping'],
  },
  {
    id: 3,
    title: 'AI Multi-Agent Core',
    status: 'LIVE IN DEMO',
    items: ['Vision Agent', 'Pollution Detection Agent', 'Biodiversity Agent', 'Risk Assessment Agent', 'Decision Agent'],
  },
  {
    id: 4,
    title: 'Decision Engine',
    status: 'LIVE IN DEMO',
    items: ['Incident detection', 'Risk scoring', 'Investigation timeline', 'Recommendations'],
  },
  {
    id: 5,
    title: 'Response Management',
    status: 'ROADMAP',
    items: ['Cleanup missions', 'Drone deployment', 'Government coordination', 'NGO coordination'],
  },
  {
    id: 6,
    title: 'Command Center',
    status: 'LIVE IN DEMO',
    items: ['Live risk map', 'Alert feed', 'Evidence board', 'Case timeline'],
  },
];

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">System Architecture</h2>
        <p className="text-slate-300 mb-6">Animated architecture pipeline showing stages from data sources to command center. All statuses are simulated for the demo.</p>

        <div className="space-y-6">
          {STAGES.map((s, idx) => (
            <motion.div key={s.id} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:idx*0.06}} className="panel p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <span className="text-xs text-slate-400">Status: <span className="font-medium text-slate-200">{s.status}</span></span>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {s.items.map(item => (
                  <div key={item} className="rounded-md border border-white/6 p-3 bg-slate-900/40">
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

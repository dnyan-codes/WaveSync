import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, Radar, ShieldCheck, TrendingUp, BellRing } from 'lucide-react';

const highlights = [
  { title: 'Live Flood Mapping', description: 'Track critical basins with sensor-driven insights and AI risk scoring.', icon: Radar },
  { title: 'Rapid Alerts', description: 'Dispatch actionable updates for authorities, responders, and residents.', icon: BellRing },
  { title: 'Predictive Safety', description: 'Combine historical and live data to anticipate flood surges earlier.', icon: TrendingUp },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:p-10 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                <Waves size={16} /> AI-powered flood monitoring
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                WaveSync keeps every vulnerable community one step ahead.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Monitor flood-prone regions in real time with live maps, analytics, alerts, and intelligent response coordination.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:brightness-105">
                  Open dashboard <ArrowRight size={16} />
                </Link>
                <Link to="/map" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-200 hover:text-blue-600">
                  Explore live map
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20">
                  <ShieldCheck size={20} className="text-cyan-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Current readiness</p>
                  <p className="text-xl font-semibold">Operational resilience at 94%</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  ['Risk monitoring', '24/7'],
                  ['Alert coverage', '128 nodes'],
                  ['Response speed', '3 min avg'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.4 }}
                className="rounded-[1.5rem] border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <Icon size={18} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </section>
      </div>
    </div>
  );
}

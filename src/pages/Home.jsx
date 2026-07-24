import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, ShieldCheck, Radar, BellRing, TrendingUp, MapPin, Settings } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const FEATURES = [
  { icon: Radar, title: 'Live Flood Mapping', description: 'Real-time basin monitoring and risk visualizations across river catchments.' },
  { icon: BellRing, title: 'AI Alert Intelligence', description: 'Automatic severity classification and early-warning dispatch for responders.' },
  { icon: TrendingUp, title: 'Predictive Response', description: 'Forecast-driven workflows to coordinate evacuation, relief, and recovery.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] pb-24">
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-ocean-grid opacity-80" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Waves size={16} /> AI-powered flood protection
              </div>
              <div className="space-y-5 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Predict floods. Protect communities. Save lives.
                </h1>
                <p className="text-base leading-8 text-slate-300 sm:text-lg">
                  WaveSync brings disaster response into the future with live risk monitoring, predictive alerts, and command center intelligence for every operational team.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  Open Dashboard <ArrowRight size={16} />
                </Link>
                <Link to="/map" className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                  Explore Live Map
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_-40px_rgba(56,189,248,0.4)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Current readiness</p>
                  <p className="mt-3 text-3xl font-semibold text-white">94%</p>
                  <p className="mt-2 text-sm text-slate-400">Operational resilience across 128 nodes</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Alert coverage</p>
                  <p className="mt-3 text-3xl font-semibold text-white">128 nodes</p>
                  <p className="mt-2 text-sm text-slate-400">Live sensor network health</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Response speed</p>
                  <p className="mt-3 text-3xl font-semibold text-white">3 min avg</p>
                  <p className="mt-2 text-sm text-slate-400">From warning to dispatch</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Live prediction feed</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">AI Flood Forecast</h2>
                </div>
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/10">
                  Active
                </span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Sensor network</p>
                  <p className="mt-3 text-xl font-semibold text-white">128 active nodes</p>
                  <p className="mt-2 text-sm text-slate-400">Across river basins and coastal checkpoints.</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">AI confidence</p>
                  <p className="mt-3 text-xl font-semibold text-white">98.2%</p>
                  <p className="mt-2 text-sm text-slate-400">Predictive flood risk calibrated hourly.</p>
                </div>
              </div>
              <div className="mt-8 rounded-[1.75rem] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 border border-white/10">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Risk probability</span>
                  <span className="font-semibold text-white">67%</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-400">
                  <p>Coastal surge likelihood: <span className="text-white font-semibold">79%</span></p>
                  <p>River overflow forecast: <span className="text-white font-semibold">58%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-950/50 to-transparent" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, ArrowRight } from 'lucide-react';
import AgentCard from '../components/AgentCard';
import agents from '../data/Agent.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] pb-24">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-ocean-grid opacity-80" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/10 bg-gradient-to-r from-slate-900/40 to-slate-800/30 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Waves size={16} /> DeepSea Guardian
              </div>

              <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  DeepSea Guardian: AI-Based Deep Ocean Exploration & Environmental Monitoring
                </h1>
                <p className="text-base leading-7 text-slate-300 sm:text-lg">
                  DETECT • EXPLAIN • PREDICT • PRIORITIZE • RECOMMEND • COORDINATE
                </p>
                <p className="text-sm text-slate-400 mt-4">Problem Statement</p>
                <div className="panel p-4 bg-slate-900/70 border border-slate-800">
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Threats keep multiplying.

                    Plastic pollution, illegal dumping, ghost nets, oil spills, coral bleaching, and biodiversity loss are all rising simultaneously.

                    Current response systems are reactive instead of predictive.

                    Delayed detection and limited predictive capability mean agencies act only after environmental damage has already occurred.

                    Monitoring is fragmented.

                    Satellite imagery, underwater inspections, IoT sensors, and sonar systems all work independently without integration.

                    There is no unified AI-powered platform that can monitor, predict, explain, prioritize, recommend, and coordinate environmental response.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none">
                  Open Dashboard <ArrowRight size={16} />
                </Link>
                <Link to="/map" className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50">
                  Explore Live Map
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/6 bg-gradient-to-b from-slate-950/70 to-slate-900/50 p-6 shadow-soft backdrop-blur-xl">
              <h3 className="text-sm text-slate-400">Proposed Solution</h3>
              <p className="mt-3 text-white font-semibold text-xl">Build an AI-powered Ocean Intelligence Platform that integrates:</p>
              <ul className="mt-3 text-slate-300 list-disc pl-5 space-y-1">
                <li>Satellite imagery</li>
                <li>Underwater drones</li>
                <li>Sonar systems</li>
                <li>IoT water sensors</li>
                <li>Ocean buoys</li>
                <li>Weather data</li>
              </ul>

              <p className="mt-4 text-slate-300">All data is analyzed by five specialized AI agents working together:</p>
              <ol className="mt-2 text-slate-300 list-decimal pl-5">
                <li>Vision Agent</li>
                <li>Pollution Detection Agent</li>
                <li>Biodiversity Agent</li>
                <li>Risk Assessment Agent</li>
                <li>Decision Agent</li>
              </ol>
              <p className="mt-3 text-slate-300">These agents collaborate as one Multi-Agent Intelligence System.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-6">AI Agents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {agents.map((a, i) => (
              <AgentCard key={a.id} agent={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Data Sources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Satellite Imagery</h4>
              <p className="text-slate-300 text-sm mt-2">Detects oil spills, ghost nets, illegal dumping, coral bleaching, and marine pollution.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Underwater Drones</h4>
              <p className="text-slate-300 text-sm mt-2">Investigates underwater evidence.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Sonar Systems</h4>
              <p className="text-slate-300 text-sm mt-2">Analyzes underwater structures.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">IoT Water Sensors</h4>
              <p className="text-slate-300 text-sm mt-2">Monitors water quality continuously.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Ocean Buoys</h4>
              <p className="text-slate-300 text-sm mt-2">Provides wave, tide and marine conditions.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Weather Data</h4>
              <p className="text-slate-300 text-sm mt-2">Predicts storms and environmental risks.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

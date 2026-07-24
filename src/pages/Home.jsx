import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, ArrowRight } from 'lucide-react';
import AgentCard from '../components/AgentCard';
import UnderwaterHero from '../components/UnderwaterHero';
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
                  DeepSea Guardian
                </h1>
                <p className="text-xl font-semibold text-slate-200">AI-Based Deep Ocean Exploration & Environmental Monitoring</p>
                <p className="text-base leading-7 text-slate-300 sm:text-lg">
                  An AI-powered multi-agent platform that detects, predicts, explains, prioritizes and coordinates responses to marine environmental threats.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none">
                    Explore Dashboard <ArrowRight size={16} />
                  </Link>
                  <Link to="/architecture" className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50">
                    View System Architecture
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-4">
                  <div className="panel p-4 bg-slate-900/60 border border-slate-800">
                    <p className="text-sm text-slate-300">Mission Control</p>
                    <p className="text-lg font-semibold text-white mt-1">Live multi-agent demo — simulated data</p>
                  </div>
                  <div className="panel p-4 bg-slate-900/60 border border-slate-800">
                    <p className="text-sm text-slate-300">Status</p>
                    <p className="text-lg font-semibold text-white mt-1">Demo Live • Roadmap Features Active</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/6 bg-gradient-to-b from-slate-950/70 to-slate-900/50 p-6 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-slate-400">Animated Ocean</h3>
                <p className="text-xs text-slate-300">Underwater background • Particles • Mission control</p>
              </div>
              <div className="mt-4 h-64 rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/30 border border-white/5 flex items-center justify-center">
                <div className="w-full h-full">
                  {/* Replace placeholder with animated underwater hero component */}
                  <UnderwaterHero />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Threats Facing Our Oceans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="panel p-5">
              <h3 className="font-semibold text-white">Threats Keep Multiplying</h3>
              <ul className="mt-3 text-slate-300 list-disc pl-5">
                <li>Plastic pollution</li>
                <li>Illegal dumping</li>
                <li>Ghost nets</li>
                <li>Oil spills</li>
                <li>Coral bleaching</li>
                <li>Biodiversity loss</li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.05}} className="panel p-5">
              <h3 className="font-semibold text-white">Response is Reactive, Not Predictive</h3>
              <ul className="mt-3 text-slate-300 list-disc pl-5">
                <li>Delayed detection</li>
                <li>Limited predictive capability</li>
                <li>Action happens only after environmental damage</li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="panel p-5">
              <h3 className="font-semibold text-white">Monitoring is Fragmented</h3>
              <ul className="mt-3 text-slate-300 list-disc pl-5">
                <li>Satellite imagery</li>
                <li>Manual inspections</li>
                <li>Disconnected IoT sensors</li>
                <li>Sonar systems</li>
                <li>No real-time unified monitoring</li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.15}} className="panel p-5">
              <h3 className="font-semibold text-white">No Unified AI Platform</h3>
              <ul className="mt-3 text-slate-300 list-disc pl-5">
                <li>Poor coordination between agencies</li>
                <li>No explainable AI</li>
                <li>No predictive intelligence</li>
                <li>No unified monitoring platform</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proposed Solution */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Proposed Solution</h2>
          <div className="rounded-2xl border border-white/6 bg-gradient-to-b from-slate-950/50 to-slate-900/40 p-6 shadow-soft">
            <p className="text-slate-300">DeepSea Guardian integrates:</p>
            <ul className="mt-3 text-slate-200 list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>Satellite Imagery</li>
              <li>Underwater Drones</li>
              <li>Sonar Systems</li>
              <li>IoT Water Sensors</li>
              <li>Ocean Buoys</li>
              <li>Weather Data</li>
            </ul>
            <p className="mt-4 text-slate-300">All data is analyzed by five AI agents working together as one Multi-Agent Intelligence System.</p>
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Five AI Agents Working Together</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {agents.map((a, i) => (
              <AgentCard key={a.id} agent={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Decision Engine */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Decision Engine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Incident Detection</h4>
              <p className="text-slate-300 text-sm mt-2">Automated detection from fused data sources.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Risk Scoring</h4>
              <p className="text-slate-300 text-sm mt-2">Deterministic AI risk scores and forecasts.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Investigation Timeline</h4>
              <p className="text-slate-300 text-sm mt-2">Chronological case evidence and events.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">AI Recommendations</h4>
              <p className="text-slate-300 text-sm mt-2">Actionable response plans and coordination steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Management / Roadmap */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Response Management — Roadmap Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Cleanup Missions</h4>
              <p className="text-slate-300 text-sm mt-2">Coordinated cleanup planning and execution.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Drone Deployment</h4>
              <p className="text-slate-300 text-sm mt-2">Automated drone tasking for evidence collection.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Government Coordination</h4>
              <p className="text-slate-300 text-sm mt-2">Inter-agency communication and reporting.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">NGO Coordination</h4>
              <p className="text-slate-300 text-sm mt-2">NGO engagement and resource allocation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources (existing) */}
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

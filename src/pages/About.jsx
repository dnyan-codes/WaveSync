export default function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-4">DeepSea Guardian: AI-Based Deep Ocean Exploration & Environmental Monitoring</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="panel p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white">Project Overview</h3>
            <p className="text-slate-300 mt-3">DeepSea Guardian is an AI-powered Multi-Agent Ocean Intelligence Platform designed to protect marine ecosystems through continuous deep-ocean monitoring and predictive environmental analysis. The platform integrates underwater drones, sonar systems, satellite imagery, ocean buoys, weather intelligence, and IoT water sensors to provide real-time visibility into ocean health. A collaborative Multi-Agent AI system analyzes this data to detect marine threats, assess biodiversity, predict environmental risks, and recommend coordinated response strategies.</p>
            <p className="text-slate-300 mt-4">Unlike traditional monitoring systems that rely on fragmented and reactive inspections, DeepSea Guardian delivers a unified, intelligent command center for governments, NGOs, researchers, and marine conservation teams.</p>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-semibold text-white">Key Features</h3>
            <ul className="text-slate-300 mt-3 list-disc pl-5">
              <li>AI-powered deep ocean monitoring</li>
              <li>Multi-Agent intelligent decision-making</li>
              <li>Real-time pollution detection</li>
              <li>Marine biodiversity monitoring</li>
              <li>Predictive environmental risk mapping</li>
              <li>Interactive mission control dashboard</li>
            </ul>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Problem Statement</h3>
          <div className="panel p-6">
            <p className="text-slate-300">Ocean ecosystems face rapidly increasing threats including plastic pollution, illegal ocean dumping, ghost nets, oil spills, coral bleaching, biodiversity loss, water quality degradation, and habitat destruction. Current monitoring approaches depend on isolated satellite imagery, manual inspections, and disconnected sensor networks. These systems are slow, fragmented, and reactive, making early detection and coordinated response difficult.</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Our Solution</h3>
          <div className="panel p-6">
            <p className="text-slate-300">DeepSea Guardian uses a Multi-Agent AI architecture to continuously monitor and analyze deep-sea ecosystems. The platform integrates satellite imagery, underwater drones, sonar systems, IoT water sensors, ocean buoys, and weather intelligence. The collected data is processed collaboratively by five specialized AI agents that work together to detect, analyze, predict, prioritize, and recommend actions for marine environmental protection.</p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Multi-Agent AI System</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Vision Agent</h4>
              <p className="text-slate-300 text-sm mt-2">Analyzes satellite and underwater imagery; detects oil spills, ghost nets, illegal dumping, and coral bleaching.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Pollution Detection Agent</h4>
              <p className="text-slate-300 text-sm mt-2">Identifies pollution sources, tracks spread, and monitors water quality.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Biodiversity Agent</h4>
              <p className="text-slate-300 text-sm mt-2">Monitors coral reefs and habitats, detects biodiversity loss, and tracks species.</p>
            </div>
            <div className="panel p-4">
              <h4 className="font-semibold text-white">Risk Assessment Agent</h4>
              <p className="text-slate-300 text-sm mt-2">Predicts future risks, generates AI risk scores, and provides early warnings.</p>
            </div>
            <div className="panel p-4 md:col-span-2">
              <h4 className="font-semibold text-white">Decision Agent</h4>
              <p className="text-slate-300 text-sm mt-2">Combines outputs from all AI agents to prioritize incidents, recommend response strategies, and support inter-agency coordination.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Technology Stack</h3>
          <div className="panel p-6">
            <p className="text-slate-300">Frontend: React, Vite, Tailwind CSS, React Router</p>
            <p className="text-slate-300 mt-2">Visualization: Recharts, Leaflet, Framer Motion</p>
            <p className="text-slate-300 mt-2">AI Simulation: Simulated Multi-Agent Engine, Deterministic Risk Scoring</p>
            <p className="text-slate-300 mt-2">Data Layer: Structured Dummy JSON with a swappable mock API layer</p>
          </div>
        </section>
      </div>
    </div>
  );
}

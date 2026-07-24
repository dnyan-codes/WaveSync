export default function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-4">About DeepSea Guardian: AI-Based Deep Ocean Exploration & Environmental Monitoring</h2>
        <div className="panel p-6">
          <p className="text-slate-300">This project builds an AI-powered Ocean Intelligence Platform that integrates satellite imagery, underwater drones, sonar systems, IoT water sensors, ocean buoys, and weather data. The system uses five specialized AI agents (Vision, Pollution Detection, Biodiversity, Risk Assessment, Decision) to detect, explain, predict, prioritize, recommend, and coordinate environmental response.</p>
        </div>
      </div>
    </div>
  );
}

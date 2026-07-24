import AgentCard from '../components/AgentCard';
import agents from '../data/Agent.json';

export default function Agents() {
  return (
    <div className="min-h-screen py-12 bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">AI Agents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agents.map((a, i) => (
            <AgentCard key={a.id} agent={a} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

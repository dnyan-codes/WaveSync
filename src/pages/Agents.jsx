import AgentCard from '../components/AgentCard';
import agents from '../data/Agent.json';
import { useState } from 'react';
import mockApi from '../services/mockApi';
import Modal from '../components/Modal';

export default function Agents() {
  const [running, setRunning] = useState(null);
  const [result, setResult] = useState(null);

  async function handleRun(agent) {
    setRunning(agent.name);
    setResult(null);
    const res = await mockApi.runAgent(agent.name);
    setResult(res);
    setRunning(null);
  }

  return (
    <div className="min-h-screen py-12 bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">AI Agents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {agents.map((a, i) => (
            <div key={a.id} className="relative">
              <AgentCard agent={a} index={i} />
              <div className="mt-2 text-center">
                <button onClick={() => handleRun(a)} className="px-3 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold">{running === a.name ? 'Running...' : 'Run Agent'}</button>
              </div>
            </div>
          ))}
        </div>

        <Modal open={!!result} onClose={() => setResult(null)} title={result?.agent ?? 'Agent Result'}>
          <div className="text-sm text-slate-300">
            <p><strong>Time:</strong> {result?.timestamp}</p>
            <p className="mt-2"><strong>Finding:</strong> {result?.finding}</p>
            <p className="mt-2"><strong>Confidence:</strong> {result?.confidence}</p>
          </div>
        </Modal>
      </div>
    </div>
  );
}

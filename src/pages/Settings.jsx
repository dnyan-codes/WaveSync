import { useState } from 'react';

export default function Settings() {
  const [email, setEmail] = useState('ops@deepseaguardian.org');
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Settings</h2>
        <div className="panel p-6">
          <label className="block text-sm text-slate-300">Notification Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-md bg-slate-900 border border-white/6 p-3 text-white" />
          <p className="text-sm text-slate-400 mt-2">Alerts will be sent to this address for critical incidents.</p>
        </div>
      </div>
    </div>
  );
}

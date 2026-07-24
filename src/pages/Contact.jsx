import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen py-12 bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
        <div className="panel p-6">
          {sent ? (
            <p className="text-slate-300">Thanks — your message was sent (mock).</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label className="text-sm text-slate-300">Message</label>
              <textarea required className="w-full mt-2 p-3 rounded-md bg-slate-900 border border-white/6 text-white" rows={6} />
              <div className="mt-4 text-right">
                <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold">Send</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

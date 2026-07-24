import { useState } from 'react';
import mock from '../services/mockData';
import Modal from '../components/Modal';

export default function Incidents() {
  const [sel, setSel] = useState(null);
  return (
    <div className="min-h-screen py-12 bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Incidents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mock.incidents.map((inc) => (
            <article key={inc.id} className="panel p-4" onClick={() => setSel(inc)}>
              <h3 className="font-semibold text-white">{inc.title}</h3>
              <p className="text-sm text-slate-300 mt-1">Type: {inc.type} • Severity: {inc.severity}</p>
            </article>
          ))}
        </div>
      </div>
      <Modal open={!!sel} onClose={() => setSel(null)} title={sel?.title}>
        <p>Type: {sel?.type}</p>
        <p>Severity: {sel?.severity}</p>
        <p>Coordinates: {sel ? `${sel.lat}, ${sel.lon}` : ''}</p>
        <p className="mt-2 text-sm text-slate-400">This is mock incident data for demonstration.</p>
      </Modal>
    </div>
  );
}

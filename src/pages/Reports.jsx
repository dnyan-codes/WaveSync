import mock from '../services/mockData';

export default function Reports() {
  const reports = [
    { id: 1, title: 'Weekly Risk Summary', date: '2026-07-23' },
    { id: 2, title: 'Satellite Pollution Index', date: '2026-07-20' },
    { id: 3, title: 'Sensor Health Report', date: '2026-07-18' },
  ];
  return (
    <div className="min-h-screen py-12 bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Reports</h2>
        <div className="grid grid-cols-1 gap-4">
          {reports.map((r) => (
            <div key={r.id} className="panel p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">{r.title}</h3>
                <p className="text-sm text-slate-300">{r.date}</p>
              </div>
              <div>
                <a className="text-sm text-cyan-300 underline" href="#">Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { AlertTriangle, BellRing, ShieldAlert, CheckCircle2 } from 'lucide-react';

const alerts = [
  { id: 1, title: 'Sangli district evacuation alert', detail: 'River level rose above critical thresholds near the basin corridor.', severity: 'critical', time: '12 min ago' },
  { id: 2, title: 'Western Ghats rainfall advisory', detail: 'Heavy rainfall accumulation is increasing runoff risk for downstream zones.', severity: 'warning', time: '48 min ago' },
  { id: 3, title: 'Pune node restored', detail: 'Sensor group 4 reconnected and resumed transmission.', severity: 'info', time: '2 hr ago' },
];

const severityStyles = {
  critical: 'bg-red-50 text-red-600 border-red-200',
  warning: 'bg-amber-50 text-amber-600 border-amber-200',
  info: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export default function Alerts() {
  return (
    <div className="min-h-screen bg-transparent pb-16">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Incident center</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Operational alerts</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">Stay informed with real-time region monitoring, prioritised incident response, and verified updates.</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              <CheckCircle2 size={16} /> 3 active notices
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <motion.article key={alert.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-3">
                      <span className={`mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border ${severityStyles[alert.severity]}`}>
                        {alert.severity === 'critical' ? <AlertTriangle size={18} /> : alert.severity === 'warning' ? <ShieldAlert size={18} /> : <BellRing size={18} />}
                      </span>
                      <div>
                        <h2 className="text-base font-semibold text-slate-900">{alert.title}</h2>
                        <p className="mt-1 text-sm leading-7 text-slate-600">{alert.detail}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{alert.time}</span>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Response snapshot</p>
              <h2 className="mt-3 text-2xl font-semibold">Preparedness dashboard</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">Teams are aligned across monitoring, communication, and evacuation pathways with coordinated readiness for the next escalation window.</p>
              <div className="mt-6 space-y-3">
                {[
                  ['Evacuation teams', '11 active'],
                  ['Shelter readiness', '92%'],
                  ['Community updates', 'Live'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

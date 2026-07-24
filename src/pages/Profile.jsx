import { motion } from 'framer-motion';
import { UserCircle2, ShieldCheck, Sparkles, Clock3 } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-transparent pb-16">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[2rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm">
                <UserCircle2 size={28} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Operator profile</p>
                <h1 className="mt-1 text-3xl font-bold text-slate-900">Dr. Asha Rao</h1>
                <p className="mt-1 text-sm text-slate-600">Flood monitoring lead · Regional disaster response</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              <ShieldCheck size={16} /> Verified access
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: 'AI confidence', value: '97.4%', detail: 'Latest model readiness', icon: Sparkles },
              { title: 'Active shifts', value: '3/3', detail: 'Current coverage', icon: Clock3 },
              { title: 'Community impact', value: '14 regions', detail: 'Monitored and supported', icon: ShieldCheck },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                    <Icon size={18} />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

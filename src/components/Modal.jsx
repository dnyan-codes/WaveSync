import { motion } from 'framer-motion';
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 w-full max-w-2xl p-6 bg-slate-900 rounded-2xl border border-white/6 shadow-xl">
        {title && <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>}
        <div className="text-sm text-slate-300">{children}</div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 rounded-md bg-white/6 text-white">Close</button>
        </div>
      </motion.div>
    </div>
  );
}

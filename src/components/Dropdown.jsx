import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dropdown({ label, items = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen((s) => !s)} className="px-3 py-2 rounded-md bg-white/6 text-white">{label}</button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="absolute right-0 mt-2 w-44 rounded-md bg-slate-800 border border-white/6 shadow-lg">
            {items.map((it) => (
              <a key={it.path} href={it.path} className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">{it.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import UnderwaterOverlay from '../components/UnderwaterOverlay';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,45,92,0.82),transparent_30%),linear-gradient(180deg,#020617_0%,#071026_40%,#020617_100%)] text-slate-100 relative">
      <UnderwaterOverlay />
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

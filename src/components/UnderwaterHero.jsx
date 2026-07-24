import { motion } from 'framer-motion';

export default function UnderwaterHero() {
  return (
    <div className="hero-canvas bg-gradient-to-br from-slate-900/40 to-slate-800/20 p-4 flex items-center justify-center relative">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#05243a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#00121a" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
          <g fillOpacity="0.06" fill="#9be3ff">
            <ellipse cx="120" cy="260" rx="160" ry="60" />
            <ellipse cx="460" cy="220" rx="120" ry="50" />
          </g>
        </svg>
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full h-full rounded-xl border border-white/6 p-4 flex items-center justify-center">
          <div className="text-center">
            <h4 className="text-slate-300">Live Ocean Preview</h4>
            <p className="text-slate-400 mt-2">Animated underwater scene • particles • sonar waves</p>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <span className="bubble small" style={{ left: '18%', animationDelay: '0s' }} />
        <span className="bubble med" style={{ left: '36%', animationDelay: '1.3s' }} />
        <span className="bubble large" style={{ left: '60%', animationDelay: '0.5s' }} />
        <span className="bubble med" style={{ left: '78%', animationDelay: '2s' }} />
      </div>
    </div>
  );
}

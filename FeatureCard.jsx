// FeatureCard — Sakshi
import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="panel p-6 hover:border-sonar/40 transition-colors"
    >
      <div className="w-11 h-11 rounded-full bg-panel-2 border border-grid flex items-center justify-center mb-4">
        <Icon size={20} className="text-sonar" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-mist-dim leading-relaxed">{description}</p>
    </motion.div>
  );
}

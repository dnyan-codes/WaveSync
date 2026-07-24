// AgentCard — Sakshi
import { motion } from "framer-motion";
import { Search, TriangleAlert, Fish, TrendingUp, ShieldCheck } from "lucide-react";

const ICONS = { Search, TriangleAlert, Fish, TrendingUp, ShieldCheck };

// Renders one AI agent from agents.json. Pass a `confidence` (0-1) and
// `finding` string when wiring this into a real investigation result later —
// both are optional so this card also works as a static "meet the agents"
// display straight from the dummy data.
export default function AgentCard({ agent, index = 0, confidence, finding }) {
  const Icon = ICONS[agent.icon] ?? Search;
  const pct = confidence != null ? Math.round(confidence * 100) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="panel p-4"
    >
      <div className="flex items-start gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-panel-2 border border-grid flex items-center justify-center shrink-0">
          <Icon size={16} className="text-sonar" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-sm font-semibold text-white truncate">{agent.name}</h4>
            {pct != null && (
              <span className="font-mono-ocean text-xs font-medium text-sonar shrink-0">{pct}%</span>
            )}
          </div>
          <p className="text-[11px] text-mist-dim/80 italic mt-0.5">{agent.role}</p>
        </div>
      </div>

      {finding && <p className="text-xs text-mist-dim leading-relaxed mb-3">{finding}</p>}

      {pct != null && (
        <div className="w-full h-1.5 bg-grid rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-sonar"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          />
        </div>
      )}
    </motion.div>
  );
}

// Analytics.jsx — Sakshi
import { motion } from "framer-motion";
import analytics from "../data/analytics.json";
import KPICard from "../components/KPICard";
import ChartCard from "../components/ChartCard";

export default function Analytics() {
  const { stats, riskTrend, incidentsByType } = analytics;

  return (
    <div className="md:pl-56">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="eyebrow">Ocean intelligence analytics</span>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-white mt-4 mb-8">
            Trends across every monitored sector.
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <KPICard label="Sectors monitored" value={stats.sectorsMonitored} />
          <KPICard label="Active alerts" value={stats.activeAlerts} />
          <KPICard label="Ocean health index" value={stats.oceanHealthIndex} />
          <KPICard label="Feed uptime" value={stats.feedUptime} suffix="%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Composite risk trend"
            subtitle="LAST 10 DAYS"
            type="line"
            data={riskTrend}
            xKey="day"
            yKey="risk"
          />
          <ChartCard
            title="Incidents by type"
            subtitle="ALL TIME"
            type="bar"
            data={incidentsByType}
            xKey="type"
            yKey="count"
          />
        </div>
      </div>
    </div>
  );
}

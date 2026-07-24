import { motion } from "framer-motion";
import {
  Droplets,
  CloudRain,
  Radio,
  AlertTriangle,
  Activity,
  Waves,
  TrendingUp,
  TrendingDown,
  MapPin,
  FileText,
  Bell,
  Settings,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

// ---------- Mock Data ----------

const waterLevels = [
  { id: 1, river: "Godavari River", location: "Nashik Basin", level: 4.2, unit: "m", status: "safe", trend: "down" },
  { id: 2, river: "Krishna River", location: "Sangli Basin", level: 7.8, unit: "m", status: "warning", trend: "up" },
  { id: 3, river: "Mula-Mutha River", location: "Pune Basin", level: 9.6, unit: "m", status: "danger", trend: "up" },
];

const rainfallData = [
  { id: 1, region: "Konkan Coast", value: 82, unit: "mm", period: "Last 24h" },
  { id: 2, region: "Western Ghats", value: 134, unit: "mm", period: "Last 24h" },
  { id: 3, region: "Vidarbha", value: 21, unit: "mm", period: "Last 24h" },
];

const alerts = [
  { id: 1, title: "Flood Warning — Sangli District", severity: "danger", time: "12 min ago" },
  { id: 2, title: "Heavy Rainfall Advisory — Ghats Region", severity: "warning", time: "48 min ago" },
  { id: 3, title: "Sensor Reconnected — Pune Node 4", severity: "safe", time: "2 hr ago" },
];

const quickActions = [
  { id: 1, label: "View Live Map", icon: MapPin },
  { id: 2, label: "Generate Report", icon: FileText },
  { id: 3, label: "Manage Alerts", icon: Bell },
  { id: 4, label: "System Settings", icon: Settings },
];

const recentActivity = [
  { id: 1, text: "AI model flagged rising trend in Krishna River basin", time: "10 min ago", icon: TrendingUp },
  { id: 2, text: "Sensor network completed hourly sync — 128 nodes", time: "34 min ago", icon: CheckCircle2 },
  { id: 3, text: "Investigation opened for Sangli district anomaly", time: "1 hr ago", icon: AlertTriangle },
  { id: 4, text: "Rainfall model recalibrated for Western Ghats", time: "3 hr ago", icon: Activity },
];

const statusStyles = {
  safe: { text: "text-emerald-600", bg: "bg-emerald-50", ring: "ring-emerald-200", dot: "bg-emerald-500" },
  warning: { text: "text-amber-600", bg: "bg-amber-50", ring: "ring-amber-200", dot: "bg-amber-500" },
  danger: { text: "text-red-600", bg: "bg-red-50", ring: "ring-red-200", dot: "bg-red-500" },
};

// ---------- Animation Variants ----------

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
  }),
};

// ---------- Small Reusable Card Components ----------

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sublabel, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start justify-between hover:shadow-md transition-shadow duration-300"
    >
      <div>
        <p className="text-sm text-slate-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        {sublabel && <p className="text-xs text-slate-400 mt-1">{sublabel}</p>}
      </div>
      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-sm shrink-0">
        <Icon size={20} className="text-white" strokeWidth={2.25} />
      </span>
    </motion.div>
  );
}

function WaterLevelCard({ data, index }) {
  const style = statusStyles[data.status];
  const TrendIcon = data.trend === "up" ? TrendingUp : TrendingDown;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-slate-900">{data.river}</p>
          <p className="text-xs text-slate-400 mt-0.5">{data.location}</p>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ring-1 ${style.bg} ${style.text} ${style.ring}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
          {data.status}
        </span>
      </div>
      <div className="flex items-end justify-between mt-4">
        <p className="text-3xl font-bold text-slate-900">
          {data.level}
          <span className="text-base font-medium text-slate-400 ml-1">{data.unit}</span>
        </p>
        <span className={`flex items-center gap-1 text-sm font-medium ${data.trend === "up" ? "text-red-500" : "text-emerald-500"}`}>
          <TrendIcon size={16} />
        </span>
      </div>
    </motion.div>
  );
}

function RainfallCard({ data, index }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-50 shrink-0">
          <CloudRain size={18} className="text-cyan-600" strokeWidth={2.25} />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">{data.region}</p>
          <p className="text-xs text-slate-400">{data.period}</p>
        </div>
      </div>
      <p className="text-2xl font-bold text-slate-900 mt-4">
        {data.value} <span className="text-sm font-medium text-slate-400">{data.unit}</span>
      </p>
    </motion.div>
  );
}

function AlertCard({ alert, index }) {
  const style = statusStyles[alert.severity];
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors duration-200"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${style.bg}`}>
          <AlertTriangle size={16} className={style.text} strokeWidth={2.25} />
        </span>
        <p className="text-sm font-medium text-slate-800 truncate">{alert.title}</p>
      </div>
      <span className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
        <Clock size={12} />
        {alert.time}
      </span>
    </motion.div>
  );
}

// ---------- Main Dashboard ----------

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">

        {/* Hero Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 shadow-lg"
        >
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/10" />
          <div className="absolute -right-4 bottom-0 w-32 h-32 rounded-full bg-white/10" />
          <div className="relative z-10">
            <p className="text-blue-100 text-sm font-medium">Welcome back</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              WaveSync Flood Monitoring Overview
            </h1>
            <p className="text-blue-50/90 text-sm mt-2 max-w-xl">
              AI-driven monitoring across river basins is active. 3 regions currently under advisory or watch status.
            </p>
          </div>
        </motion.div>

        {/* Flood Risk Overview + Active Sensors + Live Statistics */}
        <section>
          <SectionHeading title="Live Statistics" subtitle="Real-time system overview" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={Waves} label="Flood Risk Level" value="Moderate" sublabel="3 basins on watch" index={0} />
            <StatCard icon={Radio} label="Active Sensors" value="128 / 132" sublabel="4 offline" index={1} />
            <StatCard icon={Droplets} label="Avg. Water Level" value="7.2 m" sublabel="+0.4m vs yesterday" index={2} />
            <StatCard icon={Activity} label="AI Predictions Today" value="342" sublabel="98.2% confidence avg" index={3} />
          </div>
        </section>

        {/* Water Level Cards */}
        <section>
          <SectionHeading title="Water Level Overview" subtitle="Key river basins being monitored" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {waterLevels.map((item, i) => (
              <WaterLevelCard key={item.id} data={item} index={i} />
            ))}
          </div>
        </section>

        {/* Rainfall Cards */}
        <section>
          <SectionHeading title="Rainfall Tracking" subtitle="Accumulated precipitation by region" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rainfallData.map((item, i) => (
              <RainfallCard key={item.id} data={item} index={i} />
            ))}
          </div>
        </section>

        {/* Two-column: Alerts + Quick Actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Emergency Alerts */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-900">Emergency Alerts</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors duration-200">
                View all <ArrowRight size={14} />
              </button>
            </div>
            <div className="space-y-2">
              {alerts.map((alert, i) => (
                <AlertCard key={alert.id} alert={alert} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
          >
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.button
                    key={action.id}
                    variants={scaleIn}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50">
                      <Icon size={16} className="text-blue-600" strokeWidth={2.25} />
                    </span>
                    <span className="text-xs font-medium text-slate-700 text-center leading-tight">
                      {action.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Recent Activity */}
        <section>
          <SectionHeading title="Recent Activity" subtitle="Latest system and AI agent events" />
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
            {recentActivity.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-4 p-4"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 shrink-0">
                    <Icon size={16} className="text-slate-500" strokeWidth={2.25} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-800 truncate">{item.text}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
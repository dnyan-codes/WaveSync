import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Droplets,
  CloudRain,
  Activity,
  TrendingUp,
  Calendar,
  ChevronDown,
} from "lucide-react";

// ---------- Mock Data ----------

const waterLevelTrend = [
  { day: "Mon", godavari: 4.1, krishna: 6.8, mula: 8.2 },
  { day: "Tue", godavari: 4.3, krishna: 7.0, mula: 8.6 },
  { day: "Wed", godavari: 4.0, krishna: 7.4, mula: 9.0 },
  { day: "Thu", godavari: 4.2, krishna: 7.6, mula: 9.3 },
  { day: "Fri", godavari: 4.4, krishna: 7.8, mula: 9.6 },
  { day: "Sat", godavari: 4.2, krishna: 7.9, mula: 9.5 },
  { day: "Sun", godavari: 4.2, krishna: 7.8, mula: 9.6 },
];

const rainfallByRegion = [
  { region: "Konkan", mm: 82 },
  { region: "W. Ghats", mm: 134 },
  { region: "Vidarbha", mm: 21 },
  { region: "Marathwada", mm: 38 },
  { region: "Khandesh", mm: 47 },
];

const riskDistribution = [
  { name: "Safe", value: 62, color: "#10b981" },
  { name: "Warning", value: 26, color: "#f59e0b" },
  { name: "Critical", value: 12, color: "#ef4444" },
];

const sensorActivity = [
  { day: "Mon", readings: 3120 },
  { day: "Tue", readings: 3340 },
  { day: "Wed", readings: 3280 },
  { day: "Thu", readings: 3510 },
  { day: "Fri", readings: 3670 },
  { day: "Sat", readings: 3590 },
  { day: "Sun", readings: 3720 },
];

const dateRanges = ["Last 7 Days", "Last 30 Days", "Last 90 Days"];

// ---------- Animation Variants ----------

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

// ---------- Reusable Components ----------

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

function ChartCard({ title, subtitle, children, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
    >
      <div className="mb-4">
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      <div className="h-72">{children}</div>
    </motion.div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-md px-3 py-2 text-xs">
      <p className="font-semibold text-slate-700 mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ color: entry.color }} className="font-medium">
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
}

// ---------- Main Analytics Page ----------

export default function Analytics() {
  const [dateRange, setDateRange] = useState(dateRanges[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalRainfall = useMemo(
    () => rainfallByRegion.reduce((sum, r) => sum + r.mm, 0),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">

        {/* Header + Date Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Analytics Overview</h1>
            <p className="text-sm text-slate-500 mt-1">
              Trends across water levels, rainfall, and sensor activity
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Calendar size={15} className="text-slate-400" />
              {dateRange}
              <ChevronDown size={15} className={`text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-slate-200 shadow-lg z-20 overflow-hidden"
              >
                {dateRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setDateRange(range);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                      range === dateRange ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Droplets} label="Avg. Water Level" value="7.2 m" sublabel="+0.4m vs last period" index={0} />
          <StatCard icon={CloudRain} label="Total Rainfall" value={`${totalRainfall} mm`} sublabel="Across 5 regions" index={1} />
          <StatCard icon={Activity} label="Sensor Readings" value="24.2K" sublabel="This week" index={2} />
          <StatCard icon={TrendingUp} label="Risk Trend" value="+8%" sublabel="Week over week" index={3} />
        </div>

        {/* Line + Bar row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Water Level Trend" subtitle="River basins over the past 7 days" index={0}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waterLevelTrend} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="godavari" name="Godavari" stroke="#2563EB" strokeWidth={2.5} dot={false} animationDuration={900} />
                <Line type="monotone" dataKey="krishna" name="Krishna" stroke="#06B6D4" strokeWidth={2.5} dot={false} animationDuration={900} />
                <Line type="monotone" dataKey="mula" name="Mula-Mutha" stroke="#ef4444" strokeWidth={2.5} dot={false} animationDuration={900} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Rainfall by Region" subtitle="Accumulated precipitation (mm)" index={1}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rainfallByRegion} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="region" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f8fafc" }} />
                <Bar dataKey="mm" name="Rainfall" fill="#06B6D4" radius={[6, 6, 0, 0]} animationDuration={900} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Pie + Area row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Risk Distribution" subtitle="Current status across all monitored zones" index={2}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                  animationDuration={900}
                >
                  {riskDistribution.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Sensor Network Activity" subtitle="Total readings collected per day" index={3}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sensorActivity} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="sensorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="readings"
                  name="Readings"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                  fill="url(#sensorGradient)"
                  animationDuration={900}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
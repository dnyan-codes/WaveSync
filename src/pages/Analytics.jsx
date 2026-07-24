import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from 'recharts';
import mock from '../services/mockData';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.06 } }),
};

function ChartPanel({ title, children, index = 0 }) {
  return (
    <motion.div variants={fadeUp} custom={index} initial="hidden" animate="visible" className="panel p-6">
      <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
      <div className="h-64">{children}</div>
    </motion.div>
  );
}

export default function Analytics() {
  const water = mock.timeSeries.waterLevel.map((d) => ({ time: d.time, value: d.value }));
  const alerts = mock.timeSeries.alertsCount;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(2,6,23,0.9),transparent_20%),linear-gradient(180deg,#020617_0%,#051127_30%,#01040f_100%)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Analytics</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartPanel title="Water Level Over Time" index={0}>
            <ResponsiveContainer>
              <LineChart data={water}>
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartPanel>

          <ChartPanel title="Alerts Count" index={1}>
            <ResponsiveContainer>
              <AreaChart data={alerts}>
                <XAxis dataKey="time" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.12} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartPanel>
        </div>
      </div>
    </div>
  );
}
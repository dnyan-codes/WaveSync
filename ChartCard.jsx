// ChartCard — Sakshi
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const tooltipStyle = {
  contentStyle: { background: "#0d1620", border: "1px solid #1b2833", borderRadius: 8, fontSize: 12, color: "#c8d6dd" },
  labelStyle: { color: "#fff" },
};

// type="line" for a trend (needs data: [{x, y}]) or type="bar" for a
// category breakdown (needs data: [{label, value}]).
export default function ChartCard({ title, subtitle, type = "line", data, xKey, yKey, height = 240 }) {
  return (
    <div className="panel p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {subtitle && <span className="font-mono-ocean text-xs text-mist-dim">{subtitle}</span>}
      </div>
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          {type === "bar" ? (
            <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid stroke="#1b2833" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={xKey} stroke="#8fa3ac" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa3ac" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey={yKey} fill="#5eead4" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid stroke="#1b2833" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={xKey} stroke="#8fa3ac" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#8fa3ac" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip {...tooltipStyle} />
              <Line type="monotone" dataKey={yKey} stroke="#5eead4" strokeWidth={2} dot={{ r: 3, fill: "#5eead4" }} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

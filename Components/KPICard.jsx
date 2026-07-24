// KPICard — Sakshi
// Small stat display used across the Dashboard and Analytics pages.
export default function KPICard({ label, value, suffix = "" }) {
  return (
    <div className="panel px-5 py-4">
      <div className="font-mono-ocean text-2xl text-sonar font-medium">
        {value}
        {suffix}
      </div>
      <div className="text-xs text-mist-dim uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}

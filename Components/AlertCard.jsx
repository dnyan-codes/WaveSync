// AlertCard — Sakshi
import { Link } from "react-router-dom";

const SEVERITY_DOT = { high: "bg-red", medium: "bg-amber", low: "bg-sonar" };

export default function AlertCard({ alert, linkTo }) {
  const content = (
    <div className="flex gap-3 items-start px-5 py-4 border-b border-grid last:border-b-0 hover:bg-panel-2 transition-colors">
      <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${SEVERITY_DOT[alert.severity]}`} />
      <div className="min-w-0">
        <p className="text-sm text-white leading-snug">{alert.message}</p>
        <span className="font-mono-ocean text-[10px] text-mist-dim/70 uppercase mt-1.5 inline-block">
          {alert.severity} · {alert.time}
        </span>
      </div>
    </div>
  );

  return linkTo ? (
    <Link to={linkTo}>{content}</Link>
  ) : (
    <div>{content}</div>
  );
}

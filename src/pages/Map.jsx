import { useState, useMemo, useRef, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { motion, AnimatePresence } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Search,
  LocateFixed,
  Plus,
  Minus,
  Droplets,
  AlertTriangle,
  ShieldAlert,
  Radio,
  X,
} from "lucide-react";

// ---------- Mock Data ----------

const floodLocations = [
  {
    id: 1,
    name: "Sangli Riverbank Zone",
    lat: 16.8524,
    lng: 74.5815,
    category: "danger",
    waterLevel: "9.6 m",
    status: "Critical — evacuation advised",
    updated: "12 min ago",
  },
  {
    id: 2,
    name: "Pune Mula-Mutha Basin",
    lat: 18.5204,
    lng: 73.8567,
    category: "warning",
    waterLevel: "7.1 m",
    status: "Rising — under watch",
    updated: "34 min ago",
  },
  {
    id: 3,
    name: "Nashik Godavari Point",
    lat: 19.9975,
    lng: 73.7898,
    category: "safe",
    waterLevel: "4.2 m",
    status: "Stable",
    updated: "1 hr ago",
  },
  {
    id: 4,
    name: "Kolhapur Panchganga Node",
    lat: 16.705,
    lng: 74.2433,
    category: "warning",
    waterLevel: "6.8 m",
    status: "Rising — monitor closely",
    updated: "22 min ago",
  },
  {
    id: 5,
    name: "Ratnagiri Coastal Sensor",
    lat: 16.9902,
    lng: 73.312,
    category: "safe",
    waterLevel: "2.9 m",
    status: "Stable",
    updated: "48 min ago",
  },
];

const categoryStyles = {
  danger: { color: "#ef4444", label: "Critical", bg: "bg-red-50", text: "text-red-600", ring: "ring-red-200" },
  warning: { color: "#f59e0b", label: "Warning", bg: "bg-amber-50", text: "text-amber-600", ring: "ring-amber-200" },
  safe: { color: "#10b981", label: "Safe", bg: "bg-emerald-50", text: "text-emerald-600", ring: "ring-emerald-200" },
};

// ---------- Custom colored marker icon (avoids default Leaflet icon path issues) ----------

function createMarkerIcon(category) {
  const color = categoryStyles[category].color;
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 26px; height: 26px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -28],
  });
}

// ---------- Map control helpers (must live inside MapContainer) ----------

function ZoomControls() {
  const map = useMap();
  return (
    <div className="absolute bottom-6 right-4 z-[400] flex flex-col gap-2">
      <button
        onClick={() => map.zoomIn()}
        aria-label="Zoom in"
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <Plus size={16} />
      </button>
      <button
        onClick={() => map.zoomOut()}
        aria-label="Zoom out"
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <Minus size={16} />
      </button>
    </div>
  );
}

function LocateButton() {
  const map = useMap();
  const [locating, setLocating] = useState(false);

  const handleLocate = useCallback(() => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        map.flyTo([pos.coords.latitude, pos.coords.longitude], 12, { duration: 1.2 });
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }, [map]);

  return (
    <button
      onClick={handleLocate}
      aria-label="Go to current location"
      className="absolute bottom-24 right-4 z-[400] w-9 h-9 flex items-center justify-center rounded-lg bg-white shadow-md border border-slate-200 text-blue-600 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <LocateFixed size={16} className={locating ? "animate-pulse" : ""} />
    </button>
  );
}

function FlyToLocation({ target }) {
  const map = useMap();
  if (target) {
    map.flyTo([target.lat, target.lng], 13, { duration: 1 });
  }
  return null;
}

// ---------- Stat card above the map ----------

function StatChip({ icon: Icon, label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="flex items-center gap-3 bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-3"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shrink-0">
        <Icon size={16} className="text-white" strokeWidth={2.25} />
      </span>
      <div>
        <p className="text-xs text-slate-500 font-medium">{label}</p>
        <p className="text-sm font-bold text-slate-900">{value}</p>
      </div>
    </motion.div>
  );
}

// ---------- Main Map Page ----------

export default function MapPage() {
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const markerRefs = useRef({});

  const filteredLocations = useMemo(() => {
    if (!query.trim()) return floodLocations;
    return floodLocations.filter((loc) =>
      loc.name.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [query]);

  const counts = useMemo(() => {
    return floodLocations.reduce(
      (acc, loc) => {
        acc[loc.category] += 1;
        return acc;
      },
      { danger: 0, warning: 0, safe: 0 }
    );
  }, []);

  const handleResultClick = (loc) => {
    setSelectedLocation(loc);
    setTimeout(() => {
      markerRefs.current[loc.id]?.openPopup();
    }, 350);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-bold text-slate-900">Live Flood Monitoring Map</h1>
          <p className="text-sm text-slate-500 mt-1">
            Real-time sensor and basin status across monitored regions
          </p>
        </motion.div>

        {/* Stat chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatChip icon={ShieldAlert} label="Critical Zones" value={counts.danger} index={0} />
          <StatChip icon={AlertTriangle} label="Under Watch" value={counts.warning} index={1} />
          <StatChip icon={Droplets} label="Stable Zones" value={counts.safe} index={2} />
        </div>

        {/* Search + Map card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
        >
          {/* Search bar */}
          <div className="p-4 border-b border-slate-100 relative">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a location, e.g. Sangli, Pune, Nashik..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Search results dropdown */}
            <AnimatePresence>
              {query && filteredLocations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-4 right-4 mt-2 bg-white rounded-xl border border-slate-200 shadow-lg z-[500] max-h-56 overflow-y-auto"
                >
                  {filteredLocations.map((loc) => {
                    const style = categoryStyles[loc.category];
                    return (
                      <button
                        key={loc.id}
                        onClick={() => handleResultClick(loc)}
                        className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors duration-150 text-left"
                      >
                        <span className="text-sm font-medium text-slate-700">{loc.name}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                          {style.label}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map container */}
          <div className="relative h-[420px] sm:h-[520px] w-full">
            <MapContainer
              center={[18.2, 74.5]}
              zoom={7}
              scrollWheelZoom
              zoomControl={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {filteredLocations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={createMarkerIcon(loc.category)}
                  ref={(ref) => {
                    if (ref) markerRefs.current[loc.id] = ref;
                  }}
                >
                  <Popup>
                    <div className="min-w-[180px]">
                      <p className="font-semibold text-slate-900 text-sm">{loc.name}</p>
                      <span
                        className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${categoryStyles[loc.category].bg} ${categoryStyles[loc.category].text}`}
                      >
                        {categoryStyles[loc.category].label}
                      </span>
                      <p className="text-xs text-slate-500 mt-2">Water Level: <span className="font-medium text-slate-700">{loc.waterLevel}</span></p>
                      <p className="text-xs text-slate-500 mt-1">{loc.status}</p>
                      <p className="text-[11px] text-slate-400 mt-2">Updated {loc.updated}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}

              <ZoomControls />
              <LocateButton />
              <FlyToLocation target={selectedLocation} />
            </MapContainer>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4"
        >
          <span className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <Radio size={14} className="text-slate-400" /> Marker legend:
          </span>
          {Object.entries(categoryStyles).map(([key, style]) => (
            <span key={key} className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ${style.bg} ${style.text} ${style.ring}`}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: style.color }} />
              {style.label}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
// Landing.jsx — Sakshi
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, ShieldCheck, Radar, Users } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

const FEATURES = [
  { icon: Radar, title: "Live Sector Monitoring", description: "Every reef sector tracked continuously via drone, sonar, satellite, and IoT feeds." },
  { icon: ShieldCheck, title: "Explainable AI Agents", description: "Five specialized agents investigate every incident and explain exactly how they reached their conclusion." },
  { icon: Waves, title: "Real-Time Risk Scoring", description: "A fused composite risk score per sector, updated as new readings come in." },
  { icon: Users, title: "Built for Every Stakeholder", description: "NGOs, government agencies, and student researchers all get a view tailored to them." },
];

export default function Landing() {
  return (
    <div>
      <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow justify-center">AI-powered ocean intelligence</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              Every reef, every net,<br />
              every drop of plastic — <span className="text-sonar">watched.</span>
            </h1>
            <p className="text-mist-dim text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              DeepSea Guardian fuses drone, sonar, satellite, and IoT sensor data into one live ocean
              intelligence dashboard, investigated by a five-agent AI system.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
              <Link to="/dashboard" className="btn btn-sonar">Open Dashboard</Link>
              <Link to="/analytics" className="btn btn-ghost">View Analytics</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-2xl md:text-3xl font-semibold text-white mb-10">
            What DeepSea Guardian does
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

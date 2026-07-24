import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Waves,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Map", path: "/map" },
  { label: "Analytics", path: "/analytics" },
  { label: "Alerts", path: "/alerts" },
  { label: "Profile", path: "/profile" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="contentinfo"
      className="relative w-full mt-16 border-t border-slate-200/60 bg-white/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-sm">
                <Waves size={18} className="text-white" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-bold text-slate-900 tracking-tight">DeepSea Guardian</span>
            </div>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed max-w-xs">
              AI-based deep ocean exploration and environmental monitoring, built to keep ecosystems monitored and stakeholders informed in real time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-sm font-bold text-slate-900 mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-sm font-bold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <a href="mailto:support@deepseaguardian.ai" className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
                  support@deepseaguardian.ai
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <a href="tel:+911234567890" className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-500">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-sm font-bold text-slate-900 mb-4">Follow Us</h3>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <Icon size={16} strokeWidth={2.25} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {year} DeepSea Guardian. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 text-center sm:text-right">
            Built for national-level hackathon demonstration purposes.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
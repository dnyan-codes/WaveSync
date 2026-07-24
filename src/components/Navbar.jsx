import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Menu, X, Radio } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Map", path: "/map" },
  { label: "Analytics", path: "/analytics" },
  { label: "Alerts", path: "/alerts" },
  { label: "Profile", path: "/profile" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuButtonRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const location = useLocation();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        isOpen &&
        mobilePanelRef.current &&
        !mobilePanelRef.current.contains(e.target) &&
        !menuButtonRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const desktopLinkClasses = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm ${
      isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
      isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
    }`;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b transition-shadow duration-300 ${
        isScrolled ? "shadow-md border-slate-200/60" : "shadow-none border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <NavLink
            to="/"
            className="flex items-center gap-2 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-sm">
              <Waves size={18} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight">WaveSync</span>
          </NavLink>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={desktopLinkClasses}
              >
                {({ isActive }) => (
                  <span className="px-3 py-2 inline-block">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#live-monitoring"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Radio size={15} strokeWidth={2.5} />
              Live Monitoring
            </a>

            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-panel"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={mobilePanelRef}
            role="menu"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/60 shadow-lg"
          >
            <div className="px-4 pt-3 pb-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  role="menuitem"
                  className={mobileLinkClasses}
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href="#live-monitoring"
                role="menuitem"
                className="mt-2 flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm active:scale-[0.98] transition-transform duration-200"
              >
                <Radio size={15} strokeWidth={2.5} />
                Live Monitoring
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/constants";

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="md:hidden bg-white shadow-md overflow-hidden"
    >
      <div className="px-4 pt-4 pb-4 space-y-2">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `block py-2 px-2 rounded-md transition-colors duration-300 ${
                isActive ? "bg-cyan-50 text-cyan-600 font-semibold" : "text-gray-700 hover:text-cyan-600"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}
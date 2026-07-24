import { motion } from "framer-motion";

export default function Card({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  className = "",
}) {
  const hasHeader = Boolean(title || subtitle || Icon);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, scale: 1.01, boxShadow: "0 24px 70px -28px rgba(15, 23, 42, 0.28)" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      aria-label={title || "Card"}
      className={`group relative overflow-hidden rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-300 flex flex-col ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.10),_transparent_42%)]" />

      {hasHeader && (
        <div className="relative z-10 mb-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            {title && (
              <h3 className="truncate text-base font-semibold text-slate-900">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                {subtitle}
              </p>
            )}
          </div>
          {Icon && (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-sm">
              <Icon size={18} className="text-white" strokeWidth={2.25} />
            </span>
          )}
        </div>
      )}

      {children && (
        <div className="relative z-10 flex-1 text-sm leading-7 text-slate-600">
          {children}
        </div>
      )}

      {footer && (
        <div className="relative z-10 mt-5 border-t border-slate-200/70 pt-4">
          {footer}
        </div>
      )}
    </motion.section>
  );
}
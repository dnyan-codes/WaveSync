import { Loader2 } from "lucide-react";

const VARIANT_CLASSES = {
  primary:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm hover:shadow-md hover:brightness-105 focus-visible:ring-blue-500",
  secondary:
    "bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:ring-slate-400",
  outline:
    "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-blue-500",
  success:
    "bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 focus-visible:ring-emerald-500",
  danger:
    "bg-red-500 text-white shadow-sm hover:bg-red-600 focus-visible:ring-red-500",
};

const SIZE_CLASSES = {
  sm: "text-xs px-3 py-1.5 gap-1.5 rounded-lg",
  md: "text-sm px-4 py-2.5 gap-2 rounded-xl",
  lg: "text-base px-6 py-3 gap-2.5 rounded-xl",
};

const SPINNER_SIZES = {
  sm: 14,
  md: 16,
  lg: 18,
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  icon: Icon,
  className = "",
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={`
        inline-flex items-center justify-center font-semibold
        transition-all duration-200 active:scale-[0.97]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${VARIANT_CLASSES[variant]}
        ${SIZE_CLASSES[size]}
        ${className}
      `}
    >
      {loading ? (
        <Loader2 size={SPINNER_SIZES[size]} className="animate-spin" strokeWidth={2.5} />
      ) : (
        Icon && <Icon size={SPINNER_SIZES[size]} strokeWidth={2.25} />
      )}
      {children}
    </button>
  );
}
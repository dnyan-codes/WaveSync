export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 28px 80px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'ocean-grid': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.12), transparent 24%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08), transparent 18%), linear-gradient(180deg, rgba(2, 6, 23, 0.92) 0%, rgba(2, 6, 23, 0.98) 70%, #020617 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

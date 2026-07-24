// Footer — Sakshi
export default function Footer() {
  return (
    <footer className="border-t border-grid mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 font-display font-bold text-white">
          <span className="w-2.5 h-2.5 bg-sonar rounded-full" style={{ boxShadow: "0 0 10px #5eead4" }} />
          WAVESYNC
        </div>
        <p className="text-xs text-mist-dim text-center">
          © 2026 WaveSync — AI Ocean Intelligence. Built for HackOcean, Frontend Hackathon.
        </p>
        <div className="flex gap-5 text-xs text-mist-dim">
          <a href="#" className="hover:text-sonar transition-colors">GitHub</a>
          <a href="#" className="hover:text-sonar transition-colors">Docs</a>
          <a href="#" className="hover:text-sonar transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

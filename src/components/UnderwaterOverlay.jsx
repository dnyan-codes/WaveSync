export default function UnderwaterOverlay() {
  return (
    <div className="underwater-overlay" aria-hidden>
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle particle layer — small faint blobs to suggest depth without large glare */}
        <div className="absolute inset-0" aria-hidden>
          <span className="bubble small" style={{ left: '6%', bottom: '6%', animationDelay: '0.2s' }} />
          <span className="bubble small" style={{ left: '18%', bottom: '10%', animationDelay: '0.8s' }} />
          <span className="bubble med" style={{ left: '30%', bottom: '8%', animationDelay: '1.4s' }} />
          <span className="bubble small" style={{ left: '42%', bottom: '11%', animationDelay: '0.5s' }} />
          <span className="bubble small" style={{ left: '52%', bottom: '9%', animationDelay: '1.0s' }} />
          <span className="bubble med" style={{ left: '64%', bottom: '7%', animationDelay: '1.8s' }} />
          <span className="bubble small" style={{ left: '76%', bottom: '12%', animationDelay: '0.6s' }} />
          <span className="bubble small" style={{ left: '86%', bottom: '8%', animationDelay: '1.2s' }} />
        </div>
      </div>
    </div>
  );
}

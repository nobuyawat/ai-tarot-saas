"use client";

export default function HeroSection() {
  const scrollToCards = () => {
    document.getElementById("card-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "rgba(212, 175, 55, 0.6)"
                  : "rgba(168, 85, 247, 0.4)",
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

      {/* Mystic symbol */}
      <div className="relative mb-8">
        <div className="text-6xl md:text-7xl animate-pulse-glow text-glow-gold text-gold select-none">
          ✦
        </div>
        <div className="absolute inset-0 blur-2xl bg-gold/10 rounded-full" />
      </div>

      {/* Title */}
      <h1 className="text-center mb-6 relative">
        <span className="block text-sm md:text-base tracking-[0.5em] uppercase text-purple-soft/80 mb-4 font-light">
          Artificial Intelligence Tarot Reading
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-glow-gold bg-gradient-to-r from-gold-dim via-gold-light to-gold-dim bg-clip-text text-transparent animate-shimmer">
          AI TAROT
        </span>
        <span className="block text-xl md:text-2xl lg:text-3xl mt-4 text-cream/90 font-light tracking-widest">
          運命をひらく一枚
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-center text-purple-soft/70 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
        7枚のオリジナルカードがAIの力であなたの深層意識を読み解き、
        <br className="hidden md:block" />
        今必要なメッセージを届けます。
      </p>

      {/* CTA Button */}
      <button
        onClick={scrollToCards}
        className="group relative px-10 py-4 rounded-full font-medium text-base md:text-lg transition-all duration-500 cursor-pointer
          bg-gradient-to-r from-gold-dim via-gold to-gold-dim
          text-purple-deep hover:scale-105
          glow-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="text-lg">✦</span>
          無料で占う
          <span className="text-lg">✦</span>
        </span>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-soft/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-purple-soft/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

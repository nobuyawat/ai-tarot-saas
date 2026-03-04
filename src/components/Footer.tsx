export default function Footer() {
  return (
    <footer className="relative border-t border-purple-mid/30 px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-gold text-xl">✦</span>
          <span className="text-lg tracking-[0.3em] text-cream/80 font-light">
            AI TAROT
          </span>
          <span className="text-gold text-xl">✦</span>
        </div>

        {/* Disclaimer */}
        <div className="space-y-2 text-xs text-purple-soft/40 leading-relaxed">
          <p>
            本サービスはAI（人工知能）による占いエンターテインメントです。
          </p>
          <p>
            鑑定結果は参考情報としてお楽しみください。
            重要な判断は専門家にご相談ください。
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-mid/30 to-transparent mx-auto my-6" />

        {/* Copyright */}
        <p className="text-xs text-purple-soft/25">
          &copy; 2026 AI TAROT. Built with Vibe Coding.
        </p>
      </div>
    </footer>
  );
}

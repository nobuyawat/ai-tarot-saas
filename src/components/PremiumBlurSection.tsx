"use client";

import { TarotCardData } from "@/data/cards";

interface PremiumBlurSectionProps {
  card: TarotCardData | null;
  visible: boolean;
}

export default function PremiumBlurSection({
  card,
  visible,
}: PremiumBlurSectionProps) {
  if (!visible || !card) return null;

  return (
    <section className="relative px-4 py-16 flex flex-col items-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gold/3 blur-3xl" />
      </div>

      <div className="w-full max-w-2xl mx-auto relative">
        {/* Section label */}
        <div className="text-center mb-8">
          <span className="text-xs tracking-[0.4em] uppercase text-gold/60 border border-gold/20 rounded-full px-4 py-1.5">
            Premium Reading
          </span>
        </div>

        {/* Blurred premium content */}
        <div className="relative rounded-2xl border border-gold/10 bg-gradient-to-b from-purple-deep/60 to-background/60 backdrop-blur-sm overflow-hidden">
          {/* Blurred text area */}
          <div className="p-8 md:p-10">
            <div className="text-center mb-4">
              <span className="text-2xl text-gold/40">{card.symbol}</span>
              <h3 className="text-xl font-bold text-gold-light/40 mt-1">
                {card.name} — 詳細鑑定
              </h3>
              <p className="text-[10px] text-gold/25 tracking-widest uppercase mt-0.5">
                {card.nameEn} — Deep Reading
              </p>
            </div>

            <div className="premium-blur space-y-4">
              <p className="text-cream/90 text-base leading-relaxed">
                {card.paidReading}
              </p>
              <div className="flex justify-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-gold text-lg">♦</div>
                  <div className="text-xs text-cream/80 mt-1">
                    ラッキーカラー
                  </div>
                  <div className="text-sm text-gold-light font-medium">
                    シルバー
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gold text-lg">♦</div>
                  <div className="text-xs text-cream/80 mt-1">
                    ラッキーナンバー
                  </div>
                  <div className="text-sm text-gold-light font-medium">7</div>
                </div>
                <div className="text-center">
                  <div className="text-gold text-lg">♦</div>
                  <div className="text-xs text-cream/80 mt-1">
                    アドバイス
                  </div>
                  <div className="text-sm text-gold-light font-medium">
                    直感を信じて
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay with CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-[2px]">
            <div className="text-center">
              {/* Lock icon */}
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 glow-gold">
                <span className="text-2xl text-gold">🔮</span>
              </div>

              <h4 className="text-lg md:text-xl font-bold text-cream mb-2">
                詳細鑑定を解放する
              </h4>
              <p className="text-sm text-purple-soft/60 mb-6 max-w-sm">
                あなたへの具体的なアドバイス、ラッキーアイテム、
                <br />
                注意すべきポイントをお伝えします
              </p>

              {/* Payment button */}
              <button className="group relative px-8 py-3.5 rounded-full font-medium transition-all duration-500 cursor-pointer
                bg-gradient-to-r from-gold-dim via-gold to-gold-dim
                text-purple-deep hover:scale-105
                glow-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
                <span className="flex items-center gap-2">
                  <span>詳細を解放する</span>
                  <span className="text-sm font-bold">¥300</span>
                </span>
              </button>

              <p className="text-xs text-purple-soft/40 mt-3">
                Stripeによる安全な決済
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

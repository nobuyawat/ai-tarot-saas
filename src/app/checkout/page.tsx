"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthed, isPaid, setPaid } from "@/lib/demoAuth";

export default function CheckoutPage() {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      router.replace("/login");
      return;
    }
    if (isPaid()) {
      router.replace("/success");
    }
  }, [router]);

  const handlePayment = () => {
    setProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setPaid();
      router.push("/success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Card container */}
        <div className="rounded-2xl border border-gold/10 bg-gradient-to-b from-purple-deep/80 to-background/90 backdrop-blur-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-mid/50 to-purple-deep/50 px-8 py-6 border-b border-gold/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-lg">🔮</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-cream">AI TAROT</h1>
                <p className="text-xs text-purple-soft/50">詳細鑑定 - プレミアムリーディング</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Order summary */}
            <div className="rounded-xl bg-purple-deep/40 border border-gold/5 p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-cream font-medium">詳細鑑定を解放</p>
                  <p className="text-xs text-purple-soft/50 mt-0.5">
                    ラッキーカラー / アドバイス / 深層リーディング
                  </p>
                </div>
                <p className="text-lg font-bold text-gold-light">¥300</p>
              </div>
              <div className="mt-3 pt-3 border-t border-gold/5 flex justify-between">
                <span className="text-xs text-purple-soft/40">合計</span>
                <span className="text-sm font-bold text-gold">¥300</span>
              </div>
            </div>

            {/* Card form (dummy) */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs text-purple-soft/50 mb-1.5 block">
                  カード番号
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="4242 4242 4242 4242"
                    readOnly
                    className="w-full px-4 py-3 rounded-lg bg-purple-deep/50 border border-gold/10 text-cream/60 text-sm cursor-default"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-8 h-5 rounded bg-blue-600/80 flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">VISA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-purple-soft/50 mb-1.5 block">
                    有効期限
                  </label>
                  <input
                    type="text"
                    defaultValue="12/28"
                    readOnly
                    className="w-full px-4 py-3 rounded-lg bg-purple-deep/50 border border-gold/10 text-cream/60 text-sm cursor-default"
                  />
                </div>
                <div>
                  <label className="text-xs text-purple-soft/50 mb-1.5 block">
                    CVC
                  </label>
                  <input
                    type="text"
                    defaultValue="123"
                    readOnly
                    className="w-full px-4 py-3 rounded-lg bg-purple-deep/50 border border-gold/10 text-cream/60 text-sm cursor-default"
                  />
                </div>
              </div>
            </div>

            {/* Pay button */}
            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full group relative px-8 py-4 rounded-full font-medium transition-all duration-500 cursor-pointer
                bg-gradient-to-r from-gold-dim via-gold to-gold-dim
                text-purple-deep hover:scale-[1.02]
                glow-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]
                disabled:opacity-60 disabled:cursor-wait disabled:hover:scale-100"
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  <span>処理中...</span>
                </span>
              ) : (
                <span>¥300 を支払う（デモ）</span>
              )}
            </button>

            {/* Stripe-style footer */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <svg className="w-3 h-3 text-purple-soft/30" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[10px] text-purple-soft/30">
                Stripeによる安全な決済（デモ）
              </span>
            </div>

            {/* Demo notice */}
            <div className="mt-4 pt-4 border-t border-gold/5">
              <p className="text-[10px] text-gold/30 text-center leading-relaxed">
                ※ これはデモです。実際の課金は発生しません。
                <br />
                カード情報はダミーであり、送信されません。
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <button
            onClick={() => router.push("/")}
            className="text-sm text-purple-soft/40 hover:text-gold/60 transition-colors cursor-pointer"
          >
            ← トップへ戻る
          </button>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthed, isPaid } from "@/lib/demoAuth";

export default function SuccessPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAuthed()) {
      router.replace("/login");
      return;
    }
    if (!isPaid()) {
      router.replace("/checkout");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) return null;

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/8 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-purple-accent/10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md text-center">
        {/* Success animation container */}
        <div className="rounded-2xl border border-gold/15 bg-gradient-to-b from-purple-deep/80 to-background/90 backdrop-blur-sm p-10 md:p-12">
          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full border-2 border-gold/40 flex items-center justify-center mx-auto mb-6 glow-gold animate-pulse-glow">
            <span className="text-4xl">✨</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gold-light text-glow-gold mb-3">
            決済完了
          </h1>

          <p className="text-purple-soft/60 text-sm leading-relaxed mb-2">
            プレミアムリーディングが解放されました。
            <br />
            あなただけの詳細鑑定をお楽しみください。
          </p>

          {/* Order details */}
          <div className="rounded-xl bg-purple-deep/40 border border-gold/5 p-4 my-8 text-left">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-purple-soft/40">商品</span>
              <span className="text-sm text-cream">詳細鑑定プラン</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-purple-soft/40">金額</span>
              <span className="text-sm text-gold font-bold">¥300</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-purple-soft/40">ステータス</span>
              <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                完了
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => router.push("/")}
            className="group relative px-8 py-3.5 rounded-full font-medium transition-all duration-500 cursor-pointer
              bg-gradient-to-r from-gold-dim via-gold to-gold-dim
              text-purple-deep hover:scale-105
              glow-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
          >
            <span className="flex items-center justify-center gap-2">
              <span>✦</span>
              <span>トップへ戻る</span>
              <span>✦</span>
            </span>
          </button>

          {/* Demo notice */}
          <div className="mt-8 pt-4 border-t border-gold/5">
            <p className="text-[10px] text-gold/25 leading-relaxed">
              ※ これはデモ画面です。実際の課金は発生していません。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
        Artificial Intelligence Tarot Reading
      </p>
      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
        AI TAROT
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        運命をひらく一枚
      </p>
      <p className="text-gray-500 text-sm max-w-md mb-10">
        7枚のオリジナルカードがAIの力であなたの深層意識を読み解き、
        今必要なメッセージを届けます。
      </p>
      <a
        href="#card-section"
        className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition"
      >
        無料で占う
      </a>
    </section>
  );
}

"use client";

import { useState } from "react";
import { TAROT_CARDS, TarotCardData } from "@/data/cards";

interface CardSectionProps {
  onCardSelected: (card: TarotCardData) => void;
}

export default function CardSection({ onCardSelected }: CardSectionProps) {
  const [selectedCard, setSelectedCard] = useState<TarotCardData | null>(null);

  const handleCardClick = (card: TarotCardData) => {
    if (selectedCard) return;
    setSelectedCard(card);
    onCardSelected(card);
  };

  const handleReset = () => {
    setSelectedCard(null);
  };

  return (
    <section id="card-section" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        {selectedCard ? selectedCard.name : "カードを1枚選んでください"}
      </h2>

      {/* カード一覧 */}
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-10">
        {TAROT_CARDS.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card)}
            disabled={selectedCard !== null && selectedCard.id !== card.id}
            className={`w-28 h-40 md:w-36 md:h-48 rounded-lg border-2 cursor-pointer transition-opacity
              ${selectedCard && selectedCard.id !== card.id ? "opacity-30" : ""}
              ${selectedCard?.id === card.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-white hover:border-gray-400"
              }
              flex flex-col items-center justify-center gap-2 shadow-sm
            `}
          >
            <span className="text-2xl">{card.symbol}</span>
            <span className="text-sm font-bold text-gray-700">{card.name}</span>
            <span className="text-[10px] text-gray-400 uppercase">{card.nameEn}</span>
          </button>
        ))}
      </div>

      {/* 占い結果 */}
      {selectedCard && (
        <div className="w-full max-w-xl mx-auto">
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <span className="text-3xl">{selectedCard.symbol}</span>
            <h3 className="text-xl font-bold text-gray-800 mt-2">{selectedCard.name}</h3>
            <p className="text-xs text-gray-400 uppercase mb-1">{selectedCard.nameEn}</p>
            <p className="text-xs text-gray-500 mb-4">{selectedCard.keywords}</p>
            <hr className="my-4" />
            <p className="text-gray-600 leading-relaxed">{selectedCard.freeReading}</p>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={handleReset}
              className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              もう一度引く
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

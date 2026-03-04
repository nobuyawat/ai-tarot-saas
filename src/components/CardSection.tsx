"use client";

import { useState, useCallback } from "react";
import { TAROT_CARDS, TarotCardData } from "@/data/cards";
import TarotCard from "./TarotCard";

interface CardSectionProps {
  onCardSelected: (card: TarotCardData) => void;
}

export default function CardSection({ onCardSelected }: CardSectionProps) {
  const [selectedCard, setSelectedCard] = useState<TarotCardData | null>(null);
  const [flippedId, setFlippedId] = useState<number | null>(null);
  const [showReading, setShowReading] = useState(false);

  const handleCardClick = useCallback(
    (card: TarotCardData) => {
      if (selectedCard) return;

      setSelectedCard(card);
      // Delay flip for dramatic effect
      setTimeout(() => {
        setFlippedId(card.id);
      }, 300);
      // Show reading after flip completes
      setTimeout(() => {
        setShowReading(true);
        onCardSelected(card);
      }, 1200);
    },
    [selectedCard, onCardSelected]
  );

  const handleReset = useCallback(() => {
    setShowReading(false);
    setTimeout(() => {
      setFlippedId(null);
      setSelectedCard(null);
    }, 300);
  }, []);

  return (
    <section
      id="card-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-accent/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/3 blur-3xl" />
      </div>

      {/* Section header */}
      <div className="text-center mb-12 relative">
        <div className="text-gold/40 text-sm tracking-[0.5em] uppercase mb-2">
          Choose Your Card
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
          {selectedCard ? (
            <span className="text-gold text-glow-gold">{selectedCard.name}</span>
          ) : (
            "心を静めて、一枚を選んでください"
          )}
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
      </div>

      {/* Cards grid */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
        {TAROT_CARDS.map((card, index) => (
          <TarotCard
            key={card.id}
            card={card}
            isFlipped={flippedId === card.id}
            isSelected={selectedCard?.id === card.id}
            isDisabled={selectedCard !== null}
            onClick={() => handleCardClick(card)}
            index={index}
          />
        ))}
      </div>

      {/* Free Reading Result */}
      {showReading && selectedCard && (
        <div className="w-full max-w-2xl mx-auto animate-[fadeIn_0.8s_ease-out]">
          <div className="relative rounded-2xl border border-gold/20 bg-gradient-to-b from-purple-deep/80 to-background/80 backdrop-blur-sm p-8 md:p-10">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/30 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30 rounded-br-2xl" />

            <div className="text-center mb-6">
              <span className="text-3xl text-gold text-glow-gold">
                {selectedCard.symbol}
              </span>
              <h3 className="text-2xl font-bold text-gold-light mt-2">
                {selectedCard.name}
              </h3>
              <p className="text-[10px] text-gold/50 tracking-widest uppercase mt-0.5">
                {selectedCard.nameEn}
              </p>
              <p className="text-sm text-purple-soft/60 tracking-wider mt-2">
                {selectedCard.keywords}
              </p>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-6" />

            <p className="text-cream/90 text-base md:text-lg leading-relaxed text-center">
              {selectedCard.freeReading}
            </p>
          </div>

          {/* Reset button */}
          <div className="text-center mt-6">
            <button
              onClick={handleReset}
              className="text-sm text-purple-soft/50 hover:text-purple-soft/80 transition-colors cursor-pointer tracking-wider"
            >
              ✧ もう一度引く ✧
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

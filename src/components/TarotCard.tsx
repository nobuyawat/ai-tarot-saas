"use client";

import { useState } from "react";
import Image from "next/image";
import { TarotCardData } from "@/data/cards";

interface TarotCardProps {
  card: TarotCardData;
  isFlipped: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
  index: number;
}

export default function TarotCard({
  card,
  isFlipped,
  isSelected,
  isDisabled,
  onClick,
  index,
}: TarotCardProps) {
  const [imageError, setImageError] = useState(false);
  const hasImage = card.image && !imageError;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled && !isSelected}
      className={`perspective w-36 h-52 md:w-44 md:h-64 cursor-pointer transition-all duration-500
        ${isDisabled && !isSelected ? "opacity-30 scale-90 cursor-default" : "hover:scale-105"}
        ${isSelected ? "scale-110 z-10" : ""}
      `}
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out
          ${isFlipped ? "rotate-y-180" : ""}
        `}
      >
        {/* Card Back */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl border border-gold/30 overflow-hidden
            bg-gradient-to-br from-purple-deep via-purple-mid to-purple-deep
            flex flex-col items-center justify-center gap-3
            ${!isFlipped ? "glow-purple animate-card-float" : ""}
          `}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {/* Card back pattern */}
          <div className="absolute inset-2 rounded-lg border border-gold/20" />
          <div className="absolute inset-4 rounded-md border border-purple-glow/10" />

          {/* Center symbol */}
          <div className="text-3xl md:text-4xl text-gold/80 text-glow-gold select-none">
            ✦
          </div>
          <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold/40 font-light">
            AI TAROT
          </div>

          {/* Corner decorations */}
          <div className="absolute top-3 left-3 text-gold/30 text-xs">✧</div>
          <div className="absolute top-3 right-3 text-gold/30 text-xs">✧</div>
          <div className="absolute bottom-3 left-3 text-gold/30 text-xs">✧</div>
          <div className="absolute bottom-3 right-3 text-gold/30 text-xs">✧</div>
        </div>

        {/* Card Front */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl border border-gold/50 overflow-hidden
            bg-gradient-to-br from-purple-deep via-[#1a0a3e] to-purple-deep
            flex flex-col items-center justify-center glow-gold"
        >
          {hasImage ? (
            /* Image-based card front */
            <>
              <Image
                src={card.image!}
                alt={card.name}
                fill
                unoptimized
                className="object-cover"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 144px, 176px"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/90 via-transparent to-purple-deep/30" />

              {/* Card info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                <h3 className="text-sm md:text-base font-bold text-gold-light tracking-wider drop-shadow-lg">
                  {card.name}
                </h3>
                <p className="text-[8px] md:text-[10px] text-gold/60 tracking-widest uppercase mt-0.5">
                  {card.nameEn}
                </p>
              </div>

              {/* Top corner symbol */}
              <div className="absolute top-2 left-2 text-gold/60 text-xs drop-shadow-lg">
                {card.symbol}
              </div>
              <div className="absolute top-2 right-2 text-gold/60 text-xs drop-shadow-lg">
                {card.symbol}
              </div>

              {/* Gold border inner frame */}
              <div className="absolute inset-1.5 rounded-lg border border-gold/25 pointer-events-none" />
            </>
          ) : (
            /* Symbol-based fallback card front */
            <>
              <div className="absolute inset-2 rounded-lg border border-gold/20" />
              <div className="p-4 flex flex-col items-center justify-center">
                {/* Symbol */}
                <div className="text-4xl md:text-5xl text-gold text-glow-gold mb-3 select-none">
                  {card.symbol}
                </div>

                {/* Card name */}
                <h3 className="text-base md:text-lg font-bold text-gold-light text-center tracking-wider mb-1">
                  {card.name}
                </h3>

                {/* English name */}
                <p className="text-[8px] md:text-[10px] text-gold/50 tracking-widest uppercase mb-2">
                  {card.nameEn}
                </p>

                {/* Keywords */}
                <p className="text-[10px] md:text-xs text-purple-soft/60 text-center tracking-wide">
                  {card.keywords}
                </p>

                {/* Decorative line */}
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-3" />
              </div>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-gold/40 text-sm">
                {card.symbol}
              </div>
              <div className="absolute bottom-3 right-3 text-gold/40 text-sm rotate-180">
                {card.symbol}
              </div>
            </>
          )}
        </div>
      </div>
    </button>
  );
}

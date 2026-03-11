"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CardSection from "@/components/CardSection";
import { TarotCardData } from "@/data/cards";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<TarotCardData | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CardSection onCardSelected={setSelectedCard} />
    </main>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearDemo } from "@/lib/demoAuth";

export default function ResetPage() {
  const router = useRouter();

  useEffect(() => {
    clearDemo();
    router.replace("/");
  }, [router]);

  return null;
}

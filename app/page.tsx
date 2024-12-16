"use client";

import Experience from "@/components/experience";
import Hero from "@/components/hero";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience experiences={experiences} />
    </div>
  );
}

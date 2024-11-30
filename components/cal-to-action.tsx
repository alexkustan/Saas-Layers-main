"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const CalToAction: React.FC = () => {
  const calltoActionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callToActionElement = calltoActionRef.current;

    gsap.to(callToActionElement, {
      x: "-50%",
      duration: 30,
      ease: "linear",
      repeat: 10,
    });
  }, []);
  return (
    <section className="py-22">
      <div className="container overflow-x-clip flex p-4 ">
        <div
          className="flex flex-none gap-16 text-7xl font-medium"
          ref={calltoActionRef}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

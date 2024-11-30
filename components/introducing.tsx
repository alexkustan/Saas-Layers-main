"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tag } from "./ui/tag";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
}

export const Introducing: React.FC<Props> = ({ className }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = textRef.current;

    if (target) {
      const words = target.querySelectorAll("span");

      words.forEach((word, index) => {
        gsap.fromTo(
          word,
          { color: "rgba(255, 255, 255, 0.15)" }, // Initial color
          {
            color: "#FFFFFF", // Final color
            scrollTrigger: {
              trigger: word, // Each word is a trigger
              start: `top bottom-=${index * 20}px`, // Slightly stagger triggers
              end: "top 90%",
              scrub: true, // Smooth animation based on scroll
            },
          }
        );
      });
    }
  }, []);

  const text = `Your creative process deserves better.You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <div ref={textRef} className="mt-4">
            {text.split(" ").map((word, index) => (
              <span key={index} className="inline-block mr- whitespace-nowrap">
                {word}&nbsp;
              </span>
            ))}
          </div>
          <span className="text-lime-400 block mt-4">
            That&apos;s why we build Layers.
          </span>
        </div>
      </div>
    </section>
  );
};

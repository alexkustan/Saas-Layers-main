"use client";

import React, { useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import designExample1 from "@/public/images/design-example-1.png";
import designExample2 from "@/public/images/design-example-2.png";
import { Pointer } from "./ui/pointer";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const pointer1Ref = useRef<HTMLDivElement>(null);
  const pointer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftDesign = image1Ref.current;
    const leftPointer = pointer1Ref.current;
    const reghtDesign = image2Ref.current;
    const reghtPointer = pointer2Ref.current;

    if (leftDesign) {
      // Left design animation
      gsap.set(leftDesign, { x: 1000, y: -1000 });
      gsap.to(leftDesign, { x: 0, y: 0, duration: 3 });
    }

    if (leftPointer) {
      // Left pointer animation
      const leftPointerTl = gsap.timeline();
      leftPointerTl.set(leftPointer, { x: 830, y: -900 });
      leftPointerTl.to(leftPointer, { x: -100, y: 0, duration: 3 });
      leftPointerTl.to(leftPointer, { x: 0, y: 0, duration: 1 });
    }
    if (reghtDesign) {
      // Right design animation
      gsap.set(reghtDesign, { x: 1000 });
      gsap.to(reghtDesign, { x: 0, y: 0, duration: 2 });
    }
    if (reghtPointer) {
      // Right pointer animation
      const reghtPointerTl = gsap.timeline();
      reghtPointerTl.set(reghtPointer, { x: 1000 });
      reghtPointerTl.to(reghtPointer, { x: 200, y: 0, duration: 2 });
      reghtPointerTl.to(reghtPointer, { x: 0, y: 0, duration: 1 });
    }
  }, []);

  return (
    <section className="py-24">
      <div className="container relative">
        <div
          className="absolute -left-44 top-16 hidden lg:block"
          ref={image1Ref}
        >
          <Image src={designExample1} alt="design example 1" />
        </div>
        <div
          className="absolute -right-72 -top-16 hidden lg:block"
          ref={image2Ref}
        >
          <Image src={designExample2} alt="design example 2" />
        </div>
        <div
          className="absolute lg:block  hidden left-56 top-96"
          ref={pointer1Ref}
        >
          <Pointer name={"Alex"} />
        </div>
        <div
          className="absolute lg:block hidden right-80 -top-4"
          ref={pointer2Ref}
        >
          <Pointer name={"Andrea"} color="red" />
        </div>

        <div className="flex justify-center">
          <div className="rounded-full text-neutral-950 inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created efforthlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down.Layers combines powerful
          features with an intuative interface that keeps you in your creative
          flow.
        </p>
        <form className="flex border items-center border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <Input
            placeholder="Enter your email"
            type="email"
            className="bg-transparent px-4 md:flex-1"
          />
          <Button
            type="submit"
            className=" text-black hover:text-white bg-lime-400 h-12 rounded-full px-6 font-medium"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

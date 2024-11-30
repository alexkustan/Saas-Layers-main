import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import designExample1 from "@/public/images/design-example-1.png";
import designExample2 from "@/public/images/design-example-2.png";
import { Pointer } from "./ui/pointer";

export const Hero: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image src={designExample1} alt="design example 1" />
        </div>
        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image src={designExample2} alt="design example 2" />
        </div>
        <div className="absolute lg:block  hidden left-56 top-96">
          <Pointer name={"Alex"} />
        </div>
        <div className="absolute lg:block hidden right-80 -top-4">
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

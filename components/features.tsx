import React from "react";
import { Tag } from "./ui/tag";
import { SimplicityCards } from "./ui/simplicity-cards";
import { CardsText } from "./cards-components/cards-text";
import { CardsKeys } from "./cards-components/cards-keys";
import { CardsImg } from "./cards-components/cards-img";
const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export const Features: React.FC = () => {
  return (
    <section className="py-2 md:py-5" id="Features">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl text-center font-medium mt-6 max-w-2xl mx-auto">
          <span>Where power meets </span>
          <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <SimplicityCards
            bigText="Real-time Collaboration"
            className="md:col-span-2  lg:col-span-1"
            smallText="Work together seamlessly with conflict-free team editing"
          >
            <CardsImg />
          </SimplicityCards>
          <SimplicityCards
            bigText="Interactive Prototyping"
            className="md:col-span-2 lg:col-span-1"
            smallText="Engage your clients with prototypes that react to user actions"
          >
            <CardsText />
          </SimplicityCards>
          <SimplicityCards
            bigText="Keybord Quick Actions"
            smallText="Powerful commands to help you create design more quickly"
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <CardsKeys />
          </SimplicityCards>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-xl lg:max-w-3xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                &#10038;
              </span>
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Tag } from "./ui/tag";
import { AccordionComponent } from "./ui/accordion-component";

export const Faq: React.FC = () => {
  return (
    <section className="py-44">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <Tag> faqs</Tag>
          <h2 className="text-6xl font-normal mt-6 md:max-w-xl">
            Questions? We&apos;ve got{" "}
            <span className="text-lime-400">answers</span>
          </h2>
        </div>
        <div className="mt-12 md:max-w-xl mx-auto">
          <AccordionComponent />
        </div>
      </div>
    </section>
  );
};

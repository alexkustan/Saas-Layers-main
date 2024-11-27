import React from "react";

export const CalToAction: React.FC = () => {
  return (
    <section className="py-22">
      <div className="container overflow-x-clip flex p-4 ">
        <div className="flex flex-none gap-16 text-7xl font-medium">
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

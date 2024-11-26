import React from "react";
import { Tag } from "./ui/tag";

export const Integration: React.FC = () => {
  return (
    <section className="mt-48">
      <div className="container">
        <div>
          <Tag>Integrations</Tag>
          <h2 className="text-6xl font-medium mt-6">
            Plays well with <span className="text-lime-400">others</span>
          </h2>
          <p className="text-white/50">
            Layers seamlessly connects with your favorite tools, making it easy
            to plug into any workflow and collaborate across platfoems.
          </p>
        </div>
      </div>
    </section>
  );
};

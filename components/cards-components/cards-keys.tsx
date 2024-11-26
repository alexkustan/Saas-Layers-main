import React from "react";

export const CardsKeys: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center items-center aspect-video">
      <span className="rounded-2xl bg-neutral-300 inline-flex items-center justify-center text-neutral-950 font-medium size-14 w-28">
        shift
      </span>
      <span className="rounded-2xl bg-neutral-300 inline-flex items-center justify-center text-neutral-950 font-medium size-14">
        alt
      </span>
      <span className="rounded-2xl bg-neutral-300 inline-flex items-center justify-center text-neutral-950 font-medium size-14">
        C
      </span>
    </div>
  );
};

import React from "react";

export const CardsText: React.FC = () => {
  return (
    <div className="text-center  flex items-center justify-center ">
      <p className="text-white/15 text-4xl font-extrabold">
        We&apos;ve achived{" "}
        <span className="block bg-gradient-to-r bg-clip-text text-transparent from-purple-400 to-pink-400">
          incredible
        </span>{" "}
        growth this year
      </p>
    </div>
  );
};

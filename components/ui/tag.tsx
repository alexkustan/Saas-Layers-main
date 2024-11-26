import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: string;
  className?: string;
}

export const Tag: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-full border border-lime-400 text-lime-400 uppercase gap-2 px-3 py-1 inline-flex items-center",
        className
      )}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

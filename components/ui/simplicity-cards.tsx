import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children?: any;
  bigText: string;
  smallText: string;
  className?: string;
}

export const SimplicityCards: React.FC<Props> = ({
  children,
  bigText,
  smallText,
  className,
}) => {
  return (
    <div
      className={cn(
        "border border-white/10 rounded-3xl bg-neutral-900 p-6",
        className
      )}
    >
      <div className=" aspect-video">{children}</div>
      <div>
        <h2 className="text-3xl font-medium mt-6">{bigText}</h2>
        <p className="text-white/50 mt-2">{smallText}</p>
      </div>
    </div>
  );
};

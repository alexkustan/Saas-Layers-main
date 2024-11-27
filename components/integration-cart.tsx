import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  name: string;
  description: string;
  className?: string;
}

export const IntegrationCart: React.FC<Props> = ({
  icon,
  name,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "border border-white/10 rounded-3xl bg-neutral-900 p-6",
        className
      )}
      key={name}
    >
      <div className="flex justify-center items-center">
        <Image src={icon} alt={name} className="size-24" />
      </div>
      <div className="flex text-center flex-col">
        <h2 className="text-3xl font-medium mt-6">{name}</h2>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
};
